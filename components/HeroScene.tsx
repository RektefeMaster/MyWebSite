"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
  PerformanceMonitor,
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
    const size = lite ? 768 : 1024;
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
    // Three.js / R3F: scene mutasyonu kasıtlı (immutable hook değeri değil)
    // eslint-disable-next-line react-hooks/immutability -- R3F scene.background
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
      depth: lite ? 0.3 : 0.32,
      bevelEnabled: true,
      bevelThickness: lite ? 0.035 : 0.04,
      bevelSize: lite ? 0.028 : 0.03,
      bevelSegments: 2,
      curveSegments: lite ? 10 : 12,
      steps: 1,
    });
    geo.center();
    /*
      ExtrudeGeometry zaten non-indexed dönüyor. Koşulsuz toNonIndexed()
      hem "already non-indexed" uyarısı basıyor hem de tüm vertex buffer'ını
      boşuna kopyalıyordu (hero'nun kritik yolunda). Sadece gerekirse çevir.
    */
    const smooth = geo.index ? geo.toNonIndexed() : geo;
    smooth.computeVertexNormals();
    if (smooth !== geo) geo.dispose();
    return smooth;
  }, [lite]);

  useEffect(() => () => geometry.dispose(), [geometry]);

  const mesh = useRef<THREE.Mesh>(null);
  const intro = useRef(0);
  const phaseY = useRef(0);
  const phaseZ = useRef(0);
  const phaseFloat = useRef(0);
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

    // Delta-bazlı faz — idle demand pause/resume’da clock sıçraması yok
    phaseY.current += delta * (lite ? 0.3 : 0.38);
    phaseZ.current += delta * 0.26;
    phaseFloat.current += delta * 0.55;

    parent.rotation.y = Math.sin(phaseY.current) * (lite ? 0.4 : 0.62);
    parent.rotation.z = Math.sin(phaseZ.current) * 0.08 - 0.05;
    if (!lite) {
      parent.position.y = THREE.MathUtils.lerp(
        parent.position.y,
        Math.sin(phaseFloat.current) * 0.06 + state.pointer.y * 0.35,
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
        // Chrome-glass: yüksek metal + env; transmission 1 değil — açık zeminde kaybolmasın.
        samples={lite ? 7 : 10}
        // FBO üst sınır — canvas’tan büyük örnekleme yok; görsel aynı, bellek daha düşük
        resolution={lite ? 512 : 640}
        backside
        backsideThickness={lite ? 0.2 : 0.3}
        transmission={0.82}
        thickness={lite ? 0.7 : 0.9}
        roughness={dark ? 0.1 : 0.06}
        metalness={dark ? 0.55 : 0.48}
        ior={1.5}
        chromaticAberration={lite ? 0.04 : 0.06}
        anisotropicBlur={lite ? 0.06 : 0.08}
        distortion={0}
        temporalDistortion={0}
        clearcoat={1}
        clearcoatRoughness={0.06}
        attenuationColor={dark ? "#3a3832" : "#b8c0cc"}
        attenuationDistance={dark ? 3.5 : 4.5}
        color={dark ? "#c9c5bc" : "#d5d8e0"}
        envMapIntensity={dark ? 2.1 : 1.85}
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
    // eslint-disable-next-line react-hooks/immutability -- R3F WebGLRenderer
    gl.toneMappingExposure = dark ? 1.02 : 1.08;
    invalidate();
  }, [dark, gl, invalidate]);
  return null;
}

/** Env bake — tema değişince yeniden örnekle (Canvas remount YOK) */
function ThemeEnvironment({ dark }: { dark: boolean }) {
  return (
    <Environment
      key={dark ? "env-d" : "env-l"}
      // frames={1} → tek sefer bake; mobilde de 256 → daha temiz yansıma (sürekli maliyet yok)
      resolution={256}
      frames={1}
    >
      <Lightformer
        intensity={dark ? 2.6 : 3.4}
        position={[0, 4.5, 0]}
        rotation-x={Math.PI / 2}
        scale={[12, 12, 1]}
        color={dark ? "#f0ebe0" : "#ffffff"}
      />
      <Lightformer
        intensity={dark ? 1.8 : 2.4}
        position={[-3.2, 1.4, 2.2]}
        rotation-y={Math.PI / 3}
        scale={[4, 8, 1]}
        color={dark ? "#d8d2c4" : "#ffffff"}
      />
      {/* frames={1} baked → mobilde de dahil; sürekli maliyet yok, yansıma zenginleşir */}
      <Lightformer
        intensity={dark ? 1.2 : 1.6}
        position={[3.2, -0.4, 1.6]}
        rotation-y={-Math.PI / 3}
        scale={[4, 7, 1]}
        color={dark ? "#8a8678" : "#c5d4e4"}
      />
      <Lightformer
        intensity={dark ? 0.35 : 0.45}
        position={[1.2, 0.2, 2.4]}
        scale={[1.2, 6, 1]}
        color="#0a0a0a"
      />
      <Lightformer
        intensity={dark ? 1.4 : 1.8}
        position={[0, 0.6, -3.2]}
        scale={[8, 4, 1]}
        color={dark ? "#ebe8e1" : "#ffffff"}
      />
    </Environment>
  );
}

/**
 * Mobil/lite render stratejisi — hedef: kesintisiz 60fps + yüksek keskinlik.
 * Eski hata: mobilde DPR zemini 1.2'ye çöküyordu (bulanık "doku kaybı") çünkü
 * PerformanceMonitor 60'a ulaşamamayı DPR'ı dibe çekerek çözmeye çalışıyordu.
 * Çözüm: 60fps hedefini koru ama DPR aralığını sıkılaştır (1.5–2.0). Güçlü telefon
 * 2.0'da keskin & 60fps; zorlanan telefon en fazla 1.5'e iner (asla eski bulanıklık
 * seviyesine değil) → her koşulda akıcı 60'a yakın + net görüntü.
 */
const LITE_DPR_CAP = 2;
const DESKTOP_DPR_CAP = 1.5;
/** Mobil DPR tabanı — 1.5: eski 1.2'den belirgin keskin, yine de 60fps dostu */
const LITE_DPR_FLOOR = 1.5;

export default function HeroScene({
  active,
}: {
  active: boolean;
}) {
  const [ready, setReady] = useState(false);
  const [contextKey, setContextKey] = useState(0);
  const [dark, setDark] = useState(
    () => document.documentElement.classList.contains("dark")
  );
  const mountedRef = useRef(true);
  const glRef = useRef<THREE.WebGLRenderer | null>(null);
  const invalidateRef = useRef<(() => void) | null>(null);
  const readyRef = useRef(false);
  const recoverTimer = useRef(0);
  const [lite, setLite] = useState(
    () =>
      window.matchMedia("(pointer: coarse)").matches ||
      window.matchMedia("(max-width: 768px)").matches
  );
  const [dpr, setDpr] = useState(() =>
    Math.min(lite ? LITE_DPR_CAP : DESKTOP_DPR_CAP, window.devicePixelRatio)
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
  /**
   * Mount sonrası kısa süre frameloop always — soft-nav'da scroll settle /
   * IntersectionObserver gecikmesi Text+cam'i "never"da boş bırakmasın.
   */
  const [bootLive, setBootLive] = useState(true);
  /**
   * Desktop idle: pointer yokken demand (son kare donar, malzeme kalitesi aynı).
   * Mobil/lite: görünürken always (60fps hedefi).
   */
  // Mount'ta canlı: giriş animasyonu tam kare koşsun, sonra idle'a düşsün.
  const [pointerLive, setPointerLive] = useState(true);
  const idleTimer = useRef(0);
  // lite/reduced'da sahne zaten sürekli canlı — türetiyoruz, saklamıyoruz.
  const interactionLive = lite || reduced || pointerLive;

  const remountCanvas = () => {
    if (!mountedRef.current) return;
    readyRef.current = false;
    setReady(false);
    setBaked(false);
    setBootLive(true);
    setContextKey((k) => k + 1);
  };

  useEffect(() => {
    mountedRef.current = true;
    window.__metekHeroReady = false;
    return () => {
      mountedRef.current = false;
      window.clearTimeout(recoverTimer.current);
      glRef.current = null;
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
        setDpr(
          Math.min(next ? LITE_DPR_CAP : DESKTOP_DPR_CAP, window.devicePixelRatio)
        );
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

  // Desktop: pointer/touch sonrası kısa süre always; idle’da demand (GPU boş)
  useEffect(() => {
    if (lite || reduced) return;
    const IDLE_MS = 2400;
    const armIdle = () => {
      window.clearTimeout(idleTimer.current);
      idleTimer.current = window.setTimeout(() => {
        if (mountedRef.current) setPointerLive(false);
      }, IDLE_MS);
    };
    const bump = () => {
      setPointerLive(true);
      armIdle();
    };
    // Mount'ta pointerLive zaten true — sadece düşüş sayacını kur.
    armIdle();
    window.addEventListener("pointermove", bump, { passive: true });
    window.addEventListener("pointerdown", bump, { passive: true });
    return () => {
      window.clearTimeout(idleTimer.current);
      window.removeEventListener("pointermove", bump);
      window.removeEventListener("pointerdown", bump);
    };
  }, [lite, reduced]);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setDark(root.classList.contains("dark"));
    sync();
    const obs = new MutationObserver(sync);
    obs.observe(root, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  /**
   * Context lost → remount. Görünür olunca invalidate pump.
   * NOT: ready=false iken 500ms remount YOK — soft-nav'da çift init (2–3sn boşluk)
   * yaratıyordu; onCreated zaten ready'yi set eder.
   */
  useEffect(() => {
    if (!tabVisible) return;

    const gl = glRef.current;
    const lost = Boolean(gl?.getContext()?.isContextLost?.());
    if (lost) {
      window.clearTimeout(recoverTimer.current);
      recoverTimer.current = window.setTimeout(remountCanvas, 60);
      return () => window.clearTimeout(recoverTimer.current);
    }

    if (!ready || (!active && !bootLive)) return;

    let frames = 0;
    let raf = 0;
    const pump = () => {
      frames += 1;
      invalidateRef.current?.();
      if (frames < 14) raf = requestAnimationFrame(pump);
    };
    raf = requestAnimationFrame(pump);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(recoverTimer.current);
    };
  }, [active, tabVisible, ready, contextKey, bootLive]);

  // Boot liveliness süresi — bake + font sonrası IO'ya bırak
  useEffect(() => {
    if (!bootLive || !baked) return;
    const t = window.setTimeout(() => {
      if (mountedRef.current) setBootLive(false);
    }, 400);
    return () => window.clearTimeout(t);
  }, [bootLive, baked]);

  // bfcache (geri/ileri) — WebGL sıkça ölü gelir; remount şart
  useEffect(() => {
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) remountCanvas();
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, []);

  const visible = active && tabVisible && !reduced;
  // Intro altında: birkaç frame ısıt, sonra demand (GPU boş). Perde kalkınca always.
  // bootLive: soft-nav settle sırasında IO false verse bile çiz — boş header olmasın.
  const running = visible && !introCovering;
  const warming =
    (visible && introCovering && !baked) ||
    (bootLive && tabVisible && !reduced && !introCovering);
  // Mobil: görünürken always. Desktop: etkileşim/boot/intro’da always, idle’da demand.
  const wantsAlways =
    running || warming || bootLive
      ? lite || interactionLive || warming || bootLive || introCovering
      : false;
  const frameloop = reduced
    ? "demand"
    : !running && !warming && !bootLive
      ? "never"
      : wantsAlways
        ? "always"
        : "demand";
  const clear = dark ? DARK_BG.mid : LIGHT_BG.mid;
  const dprCap = lite ? LITE_DPR_CAP : DESKTOP_DPR_CAP;
  const dprFloor = lite ? LITE_DPR_FLOOR : 1;

  return (
    <div className="absolute inset-0">
      {/*
        Tema değişiminde Canvas remount YOK — WebGL context kaybını önler.
        Yalnızca gerçek context loss / recovery’de contextKey artar.
      */}
      <Canvas
        key={contextKey}
        frameloop={frameloop}
        camera={{ position: [0, 0, 5], fov: lite ? 38 : 35 }}
        dpr={dpr}
        // Lite'ta pointer etkileşimi yok — R3F event sistemini uyut
        style={lite ? { pointerEvents: "none" } : undefined}
        gl={{
          antialias: true,
          alpha: false,
          stencil: false,
          depth: true,
          // Mobilde de GPU tercihi — low-power yumuşak/grenli çıktıya yol açıyordu
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.08,
        }}
        onCreated={({ gl, invalidate }) => {
          glRef.current = gl;
          invalidateRef.current = invalidate;
          const canvas = gl.domElement;
          const onLost = (e: Event) => {
            e.preventDefault();
            if (!mountedRef.current) return;
            readyRef.current = false;
            setReady(false);
            // contextrestored birçok tarayıcıda gelmiyor — kısa gecikmeyle remount
            window.clearTimeout(recoverTimer.current);
            recoverTimer.current = window.setTimeout(remountCanvas, 80);
          };
          const onRestored = () => {
            if (!mountedRef.current) return;
            window.clearTimeout(recoverTimer.current);
            remountCanvas();
          };
          canvas.addEventListener("webglcontextlost", onLost, false);
          canvas.addEventListener("webglcontextrestored", onRestored, false);

          gl.setClearColor(clear, 1);
          setBaked(false);
          readyRef.current = true;
          setReady(true);
          window.__metekHeroReady = true;
          window.dispatchEvent(new Event("metek:hero-ready"));
          // Transmission FBO için birkaç frame; sonra intro altında idle
          let frames = 0;
          const bake = () => {
            frames += 1;
            invalidate();
            if (frames < 12) {
              requestAnimationFrame(bake);
            } else if (mountedRef.current) {
              setBaked(true);
            }
          };
          requestAnimationFrame(bake);
        }}
      >
        <PerformanceMonitor
          flipflops={4}
          // Hedef 60fps: >55 iken keskinliğe (DPR cap'e) tırman, <50'de düşür.
          // Mobilde taban 1.5 olduğundan zorlanan cihaz bile eski bulanıklığa inmez.
          bounds={() => [50, 60]}
          onDecline={() =>
            setDpr((d) => Math.max(dprFloor, +(d - 0.15).toFixed(2)))
          }
          onIncline={() =>
            setDpr((d) =>
              Math.min(dprCap, +(d + 0.15).toFixed(2), window.devicePixelRatio)
            )
          }
          onFallback={() => setDpr(dprFloor)}
        />
        <ThemeExposure dark={dark} />
        <InvalidateOn dep={dark ? "d" : "l"} />
        <GradientBackground lite={lite} dark={dark} />
        <GlassM reduced={reduced} lite={lite} dark={dark} />
        <ThemeEnvironment dark={dark} />
      </Canvas>
    </div>
  );
}
