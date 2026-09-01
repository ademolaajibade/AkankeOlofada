"use client";

import { useState } from "react";
import { MenuItemCard } from "@/components/MenuItemCard";
import { menu, categoryLabel } from "@/lib/menu";
import type { Category } from "@/lib/menu";

const categories: (Category | "all")[] = ["all", "signature", "sauces", "rice", "sides"];

export default function MenuPage() {
  const [active, setActive] = useState<Category | "all">("all");

  const items = active === "all" ? menu : menu.filter((m) => m.category === active);

  return (
    <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
      <div className="max-w-2xl">
        <h1 className="font-display text-4xl font-semibold sm:text-5xl">The full menu</h1>
        <p className="mt-4 leading-relaxed text-ink-muted">
          Every sauce is sold in litres so it keeps in the freezer the way it
          keeps at home. Rice is sold by the paint. Pick a size, a spice
          level where it applies, and add it to your pots.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            className={`rounded-full border px-4 py-2 text-sm transition-colors ${
              active === c
                ? "border-accent bg-accent/10 text-ink"
                : "border-line text-ink-muted hover:border-ink-muted"
            }`}
          >
            {c === "all" ? "Everything" : categoryLabel[c]}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <MenuItemCard key={item.id} item={item} variant="grid" />
        ))}
      </div>
    </section>
  );
}
