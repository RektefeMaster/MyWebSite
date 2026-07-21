"use client";

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useState,
  type ReactNode,
} from "react";
import { ScrollTrigger } from "@/lib/gsap";

export type Theme = "light" | "dark";

const STORAGE_KEY = "metek-theme";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function readStoredTheme(): Theme | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {
    /* private mode */
  }
  return null;
}

let refreshTimer: ReturnType<typeof setTimeout> | null = null;

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
  root.dataset.theme = theme;

  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) {
    meta.setAttribute(
      "content",
      theme === "dark" ? "#121110" : "#e6e4df"
    );
  }

  // Nav intro GSAP opacity:0’da takılı kalmasın
  const nav = document.querySelector<HTMLElement>("[data-nav-shell]");
  if (nav) {
    const op = Number.parseFloat(getComputedStyle(nav).opacity);
    if (!Number.isFinite(op) || op < 0.99) {
      nav.style.opacity = "1";
      nav.style.transform = "";
    }
  }

  // CSS token geçişi bitsin, sonra ölç — erken refresh reveal’ları opacity:0 yapıyordu
  if (refreshTimer) clearTimeout(refreshTimer);
  refreshTimer = setTimeout(() => {
    refreshTimer = null;
    ScrollTrigger.refresh();
  }, 120);
}

/** FOUC önleyici — layout body başında inline yazılır */
export const themeInitScript = `(function(){try{var k=${JSON.stringify(STORAGE_KEY)};var s=localStorage.getItem(k);var d=s==="dark"||(s!=="light"&&window.matchMedia("(prefers-color-scheme: dark)").matches);var r=document.documentElement;r.classList.toggle("dark",d);r.style.colorScheme=d?"dark":"light";r.dataset.theme=d?"dark":"light";}catch(e){}})();`;

function themeFromDom(): Theme {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // SSR ile aynı başlangıç; gerçek değer FOUC script + mount sonrası sync
  const [theme, setThemeState] = useState<Theme>("light");

  useLayoutEffect(() => {
    const initial = readStoredTheme() ?? themeFromDom();
    setThemeState(initial);
    applyTheme(initial);

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystem = (e: MediaQueryListEvent) => {
      if (readStoredTheme()) return;
      const next: Theme = e.matches ? "dark" : "light";
      setThemeState(next);
      applyTheme(next);
    };
    mq.addEventListener("change", onSystem);
    return () => mq.removeEventListener("change", onSystem);
  }, []);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* private mode */
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const current = themeFromDom();
    setTheme(current === "dark" ? "light" : "dark");
  }, [setTheme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return ctx;
}
