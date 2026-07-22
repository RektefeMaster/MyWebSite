"use client";

import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useState,
} from "react";
import {
  motion,
  AnimatePresence,
  type Transition,
  type TargetAndTransition,
  type HTMLMotionProps,
} from "motion/react";

import "./RotatingText.css";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type StaggerFrom = "first" | "last" | "center" | "random" | number;
type SplitBy = "characters" | "words" | "lines" | string;

export type RotatingTextHandle = {
  next: () => void;
  previous: () => void;
  jumpTo: (index: number) => void;
  reset: () => void;
};

type RotatingTextProps = {
  texts: string[];
  transition?: Transition;
  initial?: TargetAndTransition;
  animate?: TargetAndTransition;
  exit?: TargetAndTransition;
  animatePresenceMode?: "sync" | "wait" | "popLayout";
  animatePresenceInitial?: boolean;
  rotationInterval?: number;
  staggerDuration?: number;
  staggerFrom?: StaggerFrom;
  loop?: boolean;
  auto?: boolean;
  splitBy?: SplitBy;
  onNext?: (index: number) => void;
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
} & Omit<HTMLMotionProps<"span">, "children" | "transition" | "initial" | "animate" | "exit">;

function splitIntoCharacters(text: string) {
  if (typeof Intl !== "undefined" && "Segmenter" in Intl) {
    const segmenter = new Intl.Segmenter("en", { granularity: "grapheme" });
    return Array.from(segmenter.segment(text), (segment) => segment.segment);
  }
  return Array.from(text);
}

const RotatingText = forwardRef<RotatingTextHandle, RotatingTextProps>(
  (props, ref) => {
    const {
      texts,
      transition = { type: "spring", damping: 25, stiffness: 300 },
      initial = { y: "100%", opacity: 0 },
      animate = { y: 0, opacity: 1 },
      exit = { y: "-120%", opacity: 0 },
      animatePresenceMode = "wait",
      animatePresenceInitial = false,
      rotationInterval = 2000,
      staggerDuration = 0,
      staggerFrom = "first",
      loop = true,
      auto = true,
      splitBy = "characters",
      onNext,
      mainClassName,
      splitLevelClassName,
      elementLevelClassName,
      ...rest
    } = props;

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const currentText = texts[currentTextIndex] ?? "";

    const elements = (() => {
      if (!currentText) return [];

      if (splitBy === "characters") {
        const words = currentText.split(" ");
        return words.map((word, i) => ({
          characters: splitIntoCharacters(word),
          needsSpace: i !== words.length - 1,
        }));
      }
      if (splitBy === "words") {
        return currentText.split(" ").map((word, i, arr) => ({
          characters: [word],
          needsSpace: i !== arr.length - 1,
        }));
      }
      if (splitBy === "lines") {
        return currentText.split("\n").map((line, i, arr) => ({
          characters: [line],
          needsSpace: i !== arr.length - 1,
        }));
      }

      return currentText.split(splitBy).map((part, i, arr) => ({
        characters: [part],
        needsSpace: i !== arr.length - 1,
      }));
    })();

    const getStaggerDelay = (index: number, totalChars: number) => {
      const total = totalChars;
      if (staggerFrom === "first") return index * staggerDuration;
      if (staggerFrom === "last") return (total - 1 - index) * staggerDuration;
      if (staggerFrom === "center") {
        const center = Math.floor(total / 2);
        return Math.abs(center - index) * staggerDuration;
      }
      if (staggerFrom === "random") {
        const randomIndex = Math.floor(Math.random() * total);
        return Math.abs(randomIndex - index) * staggerDuration;
      }
      return Math.abs(staggerFrom - index) * staggerDuration;
    };

    useImperativeHandle(
      ref,
      () => ({
        next: () => {
          setCurrentTextIndex((prev) => {
            if (texts.length === 0) return prev;
            const nextIndex =
              prev === texts.length - 1 ? (loop ? 0 : prev) : prev + 1;
            if (nextIndex !== prev) onNext?.(nextIndex);
            return nextIndex;
          });
        },
        previous: () => {
          setCurrentTextIndex((prev) => {
            if (texts.length === 0) return prev;
            const prevIndex =
              prev === 0 ? (loop ? texts.length - 1 : prev) : prev - 1;
            if (prevIndex !== prev) onNext?.(prevIndex);
            return prevIndex;
          });
        },
        jumpTo: (index: number) => {
          const validIndex = Math.max(0, Math.min(index, texts.length - 1));
          setCurrentTextIndex((prev) => {
            if (validIndex !== prev) onNext?.(validIndex);
            return validIndex;
          });
        },
        reset: () => {
          setCurrentTextIndex((prev) => {
            if (prev !== 0) onNext?.(0);
            return 0;
          });
        },
      }),
      [texts.length, loop, onNext]
    );

    useEffect(() => {
      if (!auto || texts.length < 2) return;
      if (
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        return;
      }

      const intervalId = setInterval(() => {
        setCurrentTextIndex((prev) => {
          const nextIndex =
            prev === texts.length - 1 ? (loop ? 0 : prev) : prev + 1;
          if (nextIndex !== prev) onNext?.(nextIndex);
          return nextIndex;
        });
      }, rotationInterval);

      return () => clearInterval(intervalId);
    }, [auto, rotationInterval, texts.length, loop, onNext]);

    const totalChars = elements.reduce(
      (sum, word) => sum + word.characters.length,
      0
    );

    return (
      <motion.span
        className={cn("text-rotate", mainClassName)}
        {...rest}
        layout
        transition={transition}
      >
        <span className="text-rotate-sr-only">{currentText}</span>
        <AnimatePresence
          mode={animatePresenceMode}
          initial={animatePresenceInitial}
        >
          <motion.span
            key={currentTextIndex}
            className={cn(
              splitBy === "lines" ? "text-rotate-lines" : "text-rotate"
            )}
            layout
            aria-hidden="true"
          >
            {elements.map((wordObj, wordIndex, array) => {
              const previousCharsCount = array
                .slice(0, wordIndex)
                .reduce((sum, word) => sum + word.characters.length, 0);
              return (
                <span
                  key={wordIndex}
                  className={cn("text-rotate-word", splitLevelClassName)}
                >
                  {wordObj.characters.map((char, charIndex) => (
                    <motion.span
                      key={charIndex}
                      initial={initial}
                      animate={animate}
                      exit={exit}
                      transition={{
                        ...transition,
                        delay: getStaggerDelay(
                          previousCharsCount + charIndex,
                          totalChars
                        ),
                      }}
                      className={cn(
                        "text-rotate-element",
                        elementLevelClassName
                      )}
                    >
                      {char}
                    </motion.span>
                  ))}
                  {wordObj.needsSpace && (
                    <span className="text-rotate-space"> </span>
                  )}
                </span>
              );
            })}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    );
  }
);

RotatingText.displayName = "RotatingText";
export default RotatingText;
