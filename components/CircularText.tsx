"use client";

import { useEffect } from "react";
import { motion, useAnimation, useMotionValue } from "motion/react";

import "./CircularText.css";

type HoverBehavior = "slowDown" | "speedUp" | "pause" | "goBonkers";

type CircularTextProps = {
  text: string;
  spinDuration?: number;
  onHover?: HoverBehavior;
  className?: string;
};

const getRotationTransition = (duration: number, from: number, loop = true) => ({
  from,
  to: from + 360,
  ease: "linear" as const,
  duration,
  type: "tween" as const,
  repeat: loop ? Infinity : 0,
});

const getTransition = (duration: number, from: number) => ({
  rotate: getRotationTransition(duration, from),
  scale: {
    type: "spring" as const,
    damping: 20,
    stiffness: 300,
  },
});

export default function CircularText({
  text,
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}: CircularTextProps) {
  const letters = Array.from(text);
  const controls = useAnimation();
  const rotation = useMotionValue(0);

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) {
      controls.stop();
      return;
    }

    const start = rotation.get();
    void controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  }, [spinDuration, text, onHover, controls, rotation]);

  const handleHoverStart = () => {
    if (
      !onHover ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const start = rotation.get();
    let transitionConfig;
    let scaleVal = 1;

    switch (onHover) {
      case "slowDown":
        transitionConfig = getTransition(spinDuration * 2, start);
        break;
      case "speedUp":
        transitionConfig = getTransition(spinDuration / 4, start);
        break;
      case "pause":
        transitionConfig = {
          rotate: { type: "spring" as const, damping: 20, stiffness: 300 },
          scale: { type: "spring" as const, damping: 20, stiffness: 300 },
        };
        scaleVal = 1;
        break;
      case "goBonkers":
        transitionConfig = getTransition(spinDuration / 20, start);
        scaleVal = 0.8;
        break;
      default: {
        const _exhaustive: never = onHover;
        void _exhaustive;
        transitionConfig = getTransition(spinDuration, start);
      }
    }

    void controls.start({
      rotate: start + 360,
      scale: scaleVal,
      transition: transitionConfig,
    });
  };

  const handleHoverEnd = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const start = rotation.get();
    void controls.start({
      rotate: start + 360,
      scale: 1,
      transition: getTransition(spinDuration, start),
    });
  };

  return (
    <motion.div
      className={`circular-text ${className}`.trim()}
      style={{ rotate: rotation }}
      initial={{ rotate: 0 }}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      aria-hidden
    >
      {letters.map((letter, i) => {
        const rotationDeg = (360 / letters.length) * i;
        // Merkez → açı → yarıçap. Harf dairenin geometrik merkezine göre dizilir.
        const transform = `rotate(${rotationDeg}deg) translateY(calc(-1 * var(--circular-r))) translateX(-50%)`;

        return (
          <span
            key={`${letter}-${i}`}
            style={{ transform, WebkitTransform: transform }}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        );
      })}
    </motion.div>
  );
}
