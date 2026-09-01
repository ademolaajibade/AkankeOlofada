"use client";

import { useSyncExternalStore } from "react";
import { SunIcon, MoonIcon } from "./icons";

const STORAGE_KEY = "akankeolofada.theme";

function subscribe(callback: () => void) {
  const observer = new MutationObserver(callback);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getSnapshot() {
  return document.documentElement.classList.contains("light");
}

function getServerSnapshot() {
  return false; // the page ships dark by default; the inline head script
  // may add "light" before hydration, and the MutationObserver above
  // picks that up immediately after.
}

export function ThemeToggle() {
  const isLight = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  function toggle() {
    const next = !document.documentElement.classList.contains("light");
    document.documentElement.classList.toggle("light", next);
    window.localStorage.setItem(STORAGE_KEY, next ? "light" : "dark");
  }

  return (
    <button
      type="button"
      onClick={toggle}
      data-testid="theme-toggle"
      aria-label={isLight ? "Switch to dark, the pot's colour" : "Switch to light, the day market"}
      className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink transition-colors hover:border-accent hover:text-accent"
    >
      {isLight ? <MoonIcon className="h-4 w-4" /> : <SunIcon className="h-4 w-4" />}
    </button>
  );
}
