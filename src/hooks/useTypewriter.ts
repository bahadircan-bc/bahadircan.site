"use client";

import { useEffect, useState } from "react";

interface TypewriterOptions {
  /** Milliseconds between characters. */
  speed?: number;
  /** Delay before typing starts, in ms. */
  startDelay?: number;
}

/**
 * Reveals `text` one character at a time after mount. Respects
 * prefers-reduced-motion (shows the full text immediately, no timers).
 *
 * `typed` starts empty on both server and first client paint to avoid a
 * hydration mismatch — render the full text in a separate sr-only node for
 * SEO / screen readers and mark the animated node aria-hidden.
 */
export default function useTypewriter(
  text: string,
  { speed = 45, startDelay = 400 }: TypewriterOptions = {}
): { typed: string; done: boolean } {
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduce) {
      setTyped(text);
      setDone(true);
      return;
    }

    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const start = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setTyped(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(start);
      clearInterval(interval);
    };
  }, [text, speed, startDelay]);

  return { typed, done };
}
