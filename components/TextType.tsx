"use client";

import {
  useEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type ReactNode,
  type Ref,
} from "react";
import { gsap } from "@/lib/gsap";
import "./TextType.css";

type VariableSpeed = {
  min: number;
  max: number;
};

type TextTypeProps = {
  text: string | string[];
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string | ReactNode;
  cursorClassName?: string;
  cursorBlinkDuration?: number;
  textColors?: string[];
  variableSpeed?: VariableSpeed;
  onSentenceComplete?: (sentence: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
  style?: CSSProperties;
  /** Erişilebilirlik / ek HTML öznitelikleri */
  "aria-hidden"?: boolean | "true" | "false";
};

function subscribeReducedMotion(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", onStoreChange);
  return () => mq.removeEventListener("change", onStoreChange);
}

function getReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export default function TextType({
  text,
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = "",
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = "|",
  cursorClassName = "",
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  style,
  "aria-hidden": ariaHidden,
}: TextTypeProps) {
  const textArray = Array.isArray(text) ? text : [text];
  const textKey = textArray.join("\0");
  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotion,
    () => false
  );

  const [displayedText, setDisplayedText] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLSpanElement>(null);
  const variableSpeedRef = useRef(variableSpeed);
  const textsRef = useRef(textArray);

  useEffect(() => {
    variableSpeedRef.current = variableSpeed;
  }, [variableSpeed]);

  useEffect(() => {
    textsRef.current = textKey.length > 0 ? textKey.split("\0") : [""];
  }, [textKey]);

  useEffect(() => {
    if (!startOnVisible) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!showCursor || !cursor || reducedMotion) return;

    gsap.set(cursor, { opacity: 1 });
    const tween = gsap.to(cursor, {
      opacity: 0,
      duration: cursorBlinkDuration,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    return () => {
      tween.kill();
    };
  }, [showCursor, cursorBlinkDuration, reducedMotion]);

  useEffect(() => {
    if (reducedMotion || !isVisible) return;

    let timeout: ReturnType<typeof setTimeout>;
    const textArray = textsRef.current;
    const currentText = textArray[currentTextIndex] ?? "";
    const processedText = reverseMode
      ? currentText.split("").reverse().join("")
      : currentText;

    const randomSpeed = () => {
      const range = variableSpeedRef.current;
      if (!range) return typingSpeed;
      return Math.random() * (range.max - range.min) + range.min;
    };

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === "") {
          setIsDeleting(false);
          if (currentTextIndex === textArray.length - 1 && !loop) return;

          onSentenceComplete?.(
            textArray[currentTextIndex] ?? "",
            currentTextIndex
          );

          setCurrentTextIndex((prev) => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          timeout = setTimeout(() => {}, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText((prev) => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else if (currentCharIndex < processedText.length) {
        timeout = setTimeout(
          () => {
            setDisplayedText((prev) => prev + processedText[currentCharIndex]);
            setCurrentCharIndex((prev) => prev + 1);
          },
          variableSpeedRef.current ? randomSpeed() : typingSpeed
        );
      } else if (textArray.length >= 1) {
        if (!loop && currentTextIndex === textArray.length - 1) return;
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === "") {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
  }, [
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textKey,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    onSentenceComplete,
    reducedMotion,
  ]);

  const activeLength = textArray[currentTextIndex]?.length ?? 0;
  const shouldHideCursor =
    hideCursorWhileTyping && (currentCharIndex < activeLength || isDeleting);

  const color =
    textColors.length === 0
      ? "inherit"
      : textColors[currentTextIndex % textColors.length];

  const visibleText = reducedMotion
    ? (textArray[0] ?? "")
    : displayedText;

  return (
    <span
      ref={containerRef as Ref<HTMLSpanElement>}
      className={`text-type ${className}`.trim()}
      style={style}
      aria-hidden={ariaHidden}
    >
      <span className="text-type__content" style={{ color }}>
        {visibleText}
      </span>
      {showCursor && !reducedMotion && (
        <span
          ref={cursorRef}
          className={`text-type__cursor ${cursorClassName} ${
            shouldHideCursor ? "text-type__cursor--hidden" : ""
          }`.trim()}
        >
          {cursorCharacter}
        </span>
      )}
    </span>
  );
}
