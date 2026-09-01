"use client";

import { useMemo, useState } from "react";
import type { MenuItem, SpiceLevel } from "@/lib/menu";
import { spiceLevels } from "@/lib/menu";
import { useCart } from "@/lib/cart-context";
import { naira } from "@/lib/format";

export function MenuItemCard({
  item,
  variant = "grid",
}: {
  item: MenuItem;
  variant?: "grid" | "spotlight";
}) {
  const cart = useCart();
  const [sizeIdx, setSizeIdx] = useState(0);
  const [spice, setSpice] = useState<SpiceLevel>("regular");
  const [qty, setQty] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  const size = item.sizes[sizeIdx];

  const cartKey = useMemo(
    () => `${item.id}::${size.label}::${item.spicy ? spice : "n/a"}`,
    [item.id, size.label, item.spicy, spice]
  );

  function handleAdd() {
    cart.add(
      {
        key: cartKey,
        itemId: item.id,
        itemName: item.name,
        sizeLabel: size.label,
        spice: item.spicy ? spice : undefined,
        unitPriceNaira: size.priceNaira,
      },
      qty
    );
    setJustAdded(true);
    window.setTimeout(() => setJustAdded(false), 1600);
  }

  const isSpotlight = variant === "spotlight";

  return (
    <article
      className={
        isSpotlight
          ? "grid gap-8 rounded-2xl border border-line bg-surface p-6 sm:p-10 md:grid-cols-[1.1fr_1fr]"
          : "flex flex-col rounded-2xl border border-line bg-surface p-6"
      }
    >
      <div className="flex flex-col">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className={isSpotlight ? "font-display text-3xl font-semibold" : "font-display text-xl font-semibold"}>
            {item.name}
          </h3>
          {item.localName && (
            <span className="whitespace-nowrap font-mono-num text-xs uppercase tracking-wide text-ink-muted">
              {item.localName}
            </span>
          )}
        </div>

        <p className={isSpotlight ? "mt-4 text-base leading-relaxed text-ink-muted" : "mt-3 text-sm leading-relaxed text-ink-muted"}>
          {isSpotlight ? item.description : item.short}
        </p>

        {isSpotlight && item.unitNote && (
          <p className="mt-3 text-xs leading-relaxed text-ink-muted">{item.unitNote}</p>
        )}

        <blockquote className="mt-5 border-l-2 border-accent-2 pl-4 text-sm italic leading-relaxed text-ink-muted">
          &ldquo;{item.yeyeNote}&rdquo;
          <span className="mt-1 block text-xs not-italic uppercase tracking-[0.12em] text-ink-muted/70">
            — Yeye
          </span>
        </blockquote>

        {item.tags.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {item.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line px-2.5 py-1 text-xs text-ink-muted"
              >
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className={isSpotlight ? "flex flex-col justify-between rounded-xl border border-line bg-surface-2 p-5" : "mt-6 border-t border-line pt-5"}>
        <div>
          <div className="flex flex-wrap gap-2">
            {item.sizes.map((s, i) => (
              <button
                key={s.label}
                type="button"
                onClick={() => setSizeIdx(i)}
                className={`rounded-lg border px-3 py-2 text-left text-sm transition-colors ${
                  i === sizeIdx
                    ? "border-accent bg-accent/10 text-ink"
                    : "border-line text-ink-muted hover:border-ink-muted"
                }`}
              >
                <span className="block font-medium">{s.label}</span>
                {s.serves && <span className="block text-xs text-ink-muted">{s.serves}</span>}
              </button>
            ))}
          </div>

          {item.spicy && (
            <div className="mt-4">
              <span className="text-xs uppercase tracking-[0.12em] text-ink-muted">Spice level</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {spiceLevels.map((lvl) => (
                  <button
                    key={lvl.id}
                    type="button"
                    onClick={() => setSpice(lvl.id)}
                    title={lvl.note}
                    className={`rounded-full border px-3 py-1.5 text-xs transition-colors ${
                      spice === lvl.id
                        ? "border-accent text-accent"
                        : "border-line text-ink-muted hover:border-ink-muted"
                    }`}
                  >
                    {lvl.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-lg border border-line">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-3 py-1.5 text-ink-muted transition-colors hover:text-ink"
              >
                −
              </button>
              <span className="min-w-6 text-center font-mono-num text-sm">{qty}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQty((q) => q + 1)}
                className="px-3 py-1.5 text-ink-muted transition-colors hover:text-ink"
              >
                +
              </button>
            </div>
            <span className="font-mono-num text-sm text-ink-muted">
              {naira(size.priceNaira * qty)}
            </span>
          </div>

          <button
            type="button"
            onClick={handleAdd}
            className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-ink transition-transform active:scale-95"
          >
            {justAdded ? "Added ✓" : "Add to pot"}
          </button>
        </div>
      </div>
    </article>
  );
}
