"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
  PerformanceMonitor,
  Text,
} from "@react-three/drei";

const LIGHT_BG = { top: "#f5f5f5", mid: "#dedede", bot: "#c6c6c6" } as const;
const DARK_BG = { top: "#1c1b18", mid: "#141311", bot: "#0c0b0a" } as const;

/* Silver / charcoal gradient as scene.background — one less mesh in every pass */
function GradientBackground({
  lite = false,
  dark = false,
}: {
  lite?: boolean;
  dark?: boolean;
}) {
  const { scene, gl, invalidate } = useThree();
  const palette = dark ? DARK_BG : LIGHT_BG;
  const texture = useMemo(() => {
    const size = lite ? 512 : 1024;
    const c = document.createElement("canvas");
    c.width = size;
    c.height = size;
    const ctx = c.getContext("2d")!;

    const g = ctx.createLinearGradient(0, 0, 0, size);
    g.addColorStop(0, palette.top);
    g.addColorStop(0.45, palette.mid);
    g.addColorStop(1, palette.bot);
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);

    const blob = (x: number, y: number, r: number, a: number, tone: string) => {
      const rg = ctx.createRadialGradient(x, y, 0, x, y, r);
      rg.addColorStop(0, tone.replace("ALPHA", String(a)));
      rg.addColorStop(1, tone.replace("ALPHA", "0"));
      ctx.fillStyle = rg;
      ctx.fillRect(0, 0, size, size);
    };
    const s = size / 1024;
    if (dark) {
      blob(size * 0.56, size * 0.06, 220 * s, 0.35, "rgba(200,198,188,ALPHA)");
      blob(size * 0.88, size * 0.18, 180 * s, 0.18, "rgba(180,176,160,ALPHA)");
      blob(size * 0.12, size * 0.9, 170 * s, 0.22, "rgba(0,0,0,ALPHA)");
    } else {
      blob(size * 0.56, size * 0.06, 200 * s, 0.26, "rgba(30,30,30,ALPHA)");
      blob(size * 0.9, size * 0.1, 170 * s, 0.22, "rgba(30,30,30,ALPHA)");
      blob(size * 0.12, size * 0.92, 160 * s, 0.14, "rgba(30,30,30,ALPHA)");
    }

    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.needsUpdate = true;
    return tex;
  }, [lite, dark, palette.bot, palette.mid, palette.top]);

  useEffect(() => {
    scene.background = texture;
    gl.setClearColor(palette.mid, 1);
    invalidate();
    return () => {
      scene.background = null;
      texture.dispose();
    };
  }, [scene, texture, gl, palette.mid, invalidate]);

  return null;
}

/* Giant typography — refracted by the glass M */
function HeroText({ lines, dark }: { lines: string[]; dark: boolean }) {
  const { viewport } = useThree();
  const maxLen = Math.max(...lines.map((l) => l.length), 1);
  const fontSize = Math.min(
    viewport.width / (maxLen * 0.54),
    viewport.height / 3.2,
    viewport.width * 0.155
  );
  const lineHeight = fontSize * 0.9;
  const xOffsets = [0.04, -0.03, 0.015].map((f) => viewport.width * f);

  return (
    <group position={[-viewport.width * 0.06, 0.12, -0.6]}>
      {lines.map((line, i) => (
        <Text
          key={`${i}-${line}`}
          font="/fonts/SpaceGrotesk-Bold.ttf"
          fontSize={fontSize}
          maxWidth={viewport.width * 0.9}
          position={[xOffsets[i] ?? 0, (1 - i) * lineHeight, 0]}
          anchorX="center"
          anchorY="middle"
          color={dark ? "#ebe8e1" : "#0a0a0a"}
          letterSpacing={-0.05}
          textAlign="center"
          whiteSpace="nowrap"
          overflowWrap="normal"
        >
          {line}
        </Text>
      ))}
    </group>
  );
}

/**
 * Glass/chrome M.
 * Live transmission buffer at capped resolution — no stale/black FBO race,
 * correct refraction while rotating, far cheaper than full-canvas samples.
 */
function GlassM({
  reduced = false,
  lite = false,
  dark = false,
}: {
  reduced?: boolean;
  lite?: boolean;
  dark?: boolean;
}) {
  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    shape.moveTo(-0.3, -0.56);
    shape.lineTo(-0.54, -0.56);
    shape.lineTo(-0.49, 0.34);
    shape.lineTo(-0.35, 0.56);
    shape.lineTo(-0.1, 0.56);
    shape.lineTo(0, -0.04);
    shape.lineTo(0.1, 0.56);
    shape.lineTo(0.35, 0.56);
    shape.lineTo(0.49, 0.34);
    shape.lineTo(0.54, -0.56);
    shape.lineTo(0.3, -0.56);
    shape.lineTo(0.28, 0.12);
    shape.quadraticCurveTo(0, -0.5, -0.28, 0.12);
    shape.lineTo(-0.3, -0.56);
    shape.closePath();

    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: lite ? 0.28 : 0.32,
      bevelEnabled: true,
      bevelThickness: lite ? 0.03 : 0.04,
      bevelSize: lite ? 0.024 : 0.03,
      bevelSegments: lite ? 1 : 2,
      curveSegments: lite ? 8 : 12,
      steps: 1,
    });
    geo.center();
    const smooth = geo.toNonIndexed();
    smooth.computeVertexNormals();
    geo.dispose();
    return smooth;
  }, [lite]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  const mesh = useRef<THREE.Mesh>(null);
  const intro = useRef(0);
  const { viewport } = useThree();
  const scale = Math.min(viewport.width, viewport.height) * (lite ? 0.26 : 0.23);

  useFrame((state, delta) => {
    const parent = mesh.current;
    if (!parent || reduced) return;

    // Giriş — ilk ~1sn'de yumuşak ölçek + oturma
    if (intro.current < 1) {
      intro.current = Math.min(1, intro.current + delta * 1.15);
      const e = 1 - Math.pow(1 - intro.current, 3); // easeOutCubic
      parent.scale.setScalar(scale * (0.86 + 0.14 * e));
    }

    const t = state.clock.elapsedTime;
    // Float yerine tek useFrame — aynı canlılık, bir RAF daha az
    parent.rotation.y = Math.sin(t * (lite ? 0.3 : 0.38)) * (lite ? 0.4 : 0.62);
    parent.rotation.z = Math.sin(t * 0.26) * 0.08 - 0.05;
    if (!lite) {
      parent.position.y = THREE.MathUtils.lerp(
        parent.position.y,
        Math.sin(t * 0.55) * 0.06 + state.pointer.y * 0.35,
        0.07
      );
      parent.rotation.x = THREE.MathUtils.lerp(
        parent.rotation.x,
        state.pointer.y * 0.45,
        0.08
      );
      parent.position.x = THREE.MathUtils.lerp(
        parent.position.x,
        state.pointer.x * 0.75,
        0.07
      );
    }
  });

  return (
    <mesh
      ref={mesh}
      geometry={geometry}
      scale={scale}
      position={[0, 0, 1]}
      rotation={reduced || lite ? [0.08, -0.4, -0.06] : [0.05, -0.2, -0.05]}
      frustumCulled={false}
    >
      <MeshTransmissionMaterial
        samples={lite ? 5 : 10}
        resolution={lite ? 384 : 640}
        transmission={1}
        thickness={lite ? 0.5 : 0.65}
        roughness={dark ? 0.14 : 0.1}
        metalness={dark ? 0.14 : 0.08}
        ior={1.4}
        chromaticAberration={lite ? 0.02 : 0.04}
        anisotropicBlur={lite ? 0.06 : 0.1}
        distortion={0}
        temporalDistortion={0}
        clearcoat={0.75}
        clearcoatRoughness={0.15}
        attenuationColor={dark ? "#2a2824" : "#eef3f8"}
        attenuationDistance={dark ? 6 : 8}
        color={dark ? "#d8d4cb" : "#f6f8fb"}
        envMapIntensity={dark ? 1.35 : 1.1}
      />
    </mesh>
  );
}

/**
 * Metin (dil) veya tema değişince en az bir frame çizdir. Hero remount YOK;
 * reduced-motion'da frameloop "demand" olduğundan içerik güncellemesi aksi halde
 * bir sonraki etkileşime kadar bekleyip bayat kalabilir.
 */
function InvalidateOn({ dep }: { dep: string }) {
  const invalidate = useThree((s) => s.invalidate);
  useEffect(() => {
    invalidate();
  }, [dep, invalidate]);
  return null;
}

function ThemeExposure({ dark }: { dark: boolean }) {
  const { gl, invalidate } = useThree();
  useEffect(() => {
    gl.toneMappingExposure = dark ? 1.02 : 1.08;
    invalidate();
  }, [dark, gl, invalidate]);
  return null;
}

/** Env bake — tema değişince yeniden örnekle (Canvas remount YOK) */
function ThemeEnvironment({
  lite,
  dark,
}: {
  lite: boolean;
  dark: boolean;
}) {
  return (
    <Environment
      key={dark ? "env-d" : "env-l"}
      resolution={lite ? 128 : 256}
      frames={1}
    >
      <Lightformer
        intensity={dark ? 2.2 : 2.8}
        position={[0, 4.5, 0]}
        rotation-x={Math.PI / 2}
        scale={[12, 12, 1]}
        color={dark ? "#f0ebe0" : "#ffffff"}
      />
      <Lightformer
        intensity={dark ? 1.4 : 1.8}
        position={[-3.2, 1.4, 2.2]}
        rotation-y={Math.PI / 3}
        scale={[4, 8, 1]}
        color={dark ? "#d8d2c4" : "#ffffff"}
      />
      {!lite && (
        <Lightformer
          intensity={dark ? 0.9 : 1.2}
          position={[3.2, -0.4, 1.6]}
          rotation-y={-Math.PI / 3}
          scale={[4, 7, 1]}
          color={dark ? "#8a8678" : "#d8e2ec"}
        />
      )}
      <Lightformer
        intensity={dark ? 1.1 : 1.4}
        position={[0, 0.6, -3.2]}
        scale={[8, 4, 1]}
        color={dark ? "#ebe8e1" : "#ffffff"}
      />
    </Environment>
  );
}

export default function HeroScene({
  lines,
  active,
}: {
  lines: string[];
  active: boolean;
}) {
  const [ready, setReady] = useState(false);
  const [contextKey, setContextKey] = useState(0);
  const [dark, setDark] = useState(
    () => document.documentElement.classList.contains("dark")
  );
  const mountedRef = useRef(true);
  const [lite, setLite] = useState(
    () =>
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(max-width: 768px)").matches
  );
  const [dpr, setDpr] = useState(() =>
    Math.min(lite ? 1.25 : 1.5, window.devicePixelRatio)
  );
  const [reduced, setReduced] = useState(
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [tabVisible, setTabVisible] = useState(true);
  /** Intro perdesi açıkken sürekli loop yerine ısıt-sonra-dur */
  const [introCovering, setIntroCovering] = useState(
    () => document.documentElement.dataset.intro === "play"
  );
  const [baked, setBaked] = useState(false);

  useEffect(() => {
    mountedRef.current = true;
    window.__metekHeroReady = false;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (!introCovering) return;
    const onDone = () => setIntroCovering(false);
    window.addEventListener("metek:intro-done", onDone);
    return () => window.removeEventListener("metek:intro-done", onDone);
  }, [introCovering]);

  useEffect(() => {
    const coarseMq = window.matchMedia("(pointer: coarse)");
    const narrowMq = window.matchMedia("(max-width: 768px)");
    const reducedMq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const syncLite = () => {
      const next = coarseMq.matches || narrowMq.matches;
      setLite((prev) => {
        if (prev === next) return prev;
        setDpr(Math.min(next ? 1.25 : 1.5, window.devicePixelRatio));
        return next;
      });
    };
    const syncReduced = () => setReduced(reducedMq.matches);

    syncLite();
    syncReduced();
    coarseMq.addEventListener("change", syncLite);
    narrowMq.addEventListener("change", syncLite);
    reducedMq.addEventListener("change", syncReduced);
    return () => {
      coarseMq.removeEventListener("change", syncLite);
      narrowMq.removeEventListener("change", syncLite);
      reducedMq.removeEventListener("change", syncReduced);
    };
  }, []);

  useEffect(() => {
    const onVis = () => setTabVisible(document.visibilityState === "visible");
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setDark(root.classList.contains("dark"));
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  const visible = active && tabVisible && !reduced;
  // Intro altında: birkaç frame ısıt, sonra demand (GPU boş). Perde kalkınca always.
  const running = visible && !introCovering;
  const warming = visible && introCovering && !baked;
  const frameloop = reduced
    ? "demand"
    : running || warming
      ? "always"
      : "never";
  const clear = dark ? DARK_BG.mid : LIGHT_BG.mid;

  return (
    <div
      className="absolute inset-0 transition-opacity duration-500"
      style={{ opacity: ready ? 1 : 0 }}
    >
      {/*
        Tema değişiminde Canvas remount YOK — WebGL context kaybını önler.
        Yalnızca gerçek context loss’ta contextKey artar.
      */}
      <Canvas
        key={contextKey}
        frameloop={frameloop}
        camera={{ position: [0, 0, 5], fov: lite ? 38 : 35 }}
        dpr={dpr}
        // Lite'ta pointer etkileşimi yok — R3F event sistemini uyut
        style={lite ? { pointerEvents: "none" } : undefined}
        gl={{
          antialias: !lite,
          alpha: false,
          stencil: false,
          depth: true,
          powerPreference: lite ? "low-power" : "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.08,
        }}
        onCreated={({ gl, invalidate }) => {
          const canvas = gl.domElement;
          const onLost = (e: Event) => {
            e.preventDefault();
            // Gerçek GPU kaybında gizle; tema toggle remount etmediği için
            // dispose kaynaklı false-positive azaldı.
            if (mountedRef.current) setReady(false);
          };
          const onRestored = () => {
            if (!mountedRef.current) return;
            setContextKey((k) => k + 1);
          };
          canvas.addEventListener("webglcontextlost", onLost, false);
          canvas.addEventListener("webglcontextrestored", onRestored, false);
          gl.setClearColor(clear, 1);
          setBaked(false);
          setReady(true);
          window.__metekHeroReady = true;
          window.dispatchEvent(new Event("metek:hero-ready"));
          // Transmission FBO için birkaç frame; sonra intro altında idle
          let frames = 0;
          const bake = () => {
            frames += 1;
            invalidate();
            if (frames < 10) {
              requestAnimationFrame(bake);
            } else if (mountedRef.current) {
              setBaked(true);
            }
          };
          requestAnimationFrame(bake);
        }}
      >
        <PerformanceMonitor
          flipflops={3}
          onDecline={() => setDpr((d) => Math.max(1, +(d - 0.25).toFixed(2)))}
          onIncline={() =>
            setDpr((d) =>
              Math.min(lite ? 1.25 : 1.5, +(d + 0.25).toFixed(2), window.devicePixelRatio)
            )
          }
          onFallback={() => setDpr(1)}
        />
        <ThemeExposure dark={dark} />
        <InvalidateOn dep={`${dark ? "d" : "l"}|${lines.join("\u0001")}`} />
        <GradientBackground lite={lite} dark={dark} />
        <HeroText lines={lines} dark={dark} />
        <GlassM reduced={reduced} lite={lite} dark={dark} />
        <ThemeEnvironment lite={lite} dark={dark} />
      </Canvas>
    </div>
  );
}
