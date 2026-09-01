"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import { naira } from "@/lib/format";
import { buildOrderMessage, buildWhatsAppLink } from "@/lib/whatsapp";
import { site } from "@/config/site";
import { PotIcon } from "@/components/icons";

const timeWindows = [
  { id: "morning", label: "Morning, 9am – 12pm" },
  { id: "afternoon", label: "Afternoon, 12pm – 4pm" },
  { id: "evening", label: "Evening, 4pm – 6pm" },
];

export default function OrderPage() {
  const cart = useCart();

  const [fulfilment, setFulfilment] = useState<"pickup" | "delivery">("pickup");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [timeWindow, setTimeWindow] = useState(timeWindows[0].id);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");

  if (!cart.ready) {
    return <section className="mx-auto max-w-4xl px-5 py-24 sm:px-8" />;
  }

  if (cart.lines.length === 0) {
    return (
      <section className="mx-auto max-w-4xl px-5 py-24 text-center sm:px-8">
        <PotIcon className="mx-auto h-12 w-12 text-ink-muted" />
        <h1 className="mt-6 font-display text-3xl font-semibold">Your pots are empty</h1>
        <p className="mt-3 text-ink-muted">Nothing to send to {site.founderTitle} yet.</p>
        <Link
          href="/menu"
          className="mt-8 inline-block rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink"
        >
          Go fill a pot
        </Link>
      </section>
    );
  }

  const readableDate = date
    ? new Date(date + "T00:00:00").toLocaleDateString("en-NG", {
        weekday: "long",
        day: "numeric",
        month: "long",
      })
    : "";
  const windowLabel = timeWindows.find((w) => w.id === timeWindow)?.label ?? "";
  const when = readableDate ? `${readableDate}, ${windowLabel}` : "";

  const canSubmit = name.trim() && phone.trim() && date && (fulfilment === "pickup" || address.trim());
  const belowMinimum =
    fulfilment === "delivery" && cart.subtotal < site.deliveryMinimum;

  function handleSend() {
    const message = buildOrderMessage(cart.lines, cart.subtotal, {
      name,
      phone,
      fulfilment,
      address: fulfilment === "delivery" ? address : undefined,
      when,
      note: note.trim() || undefined,
    });
    window.open(buildWhatsAppLink(message), "_blank", "noopener,noreferrer");
  }

  return (
    <section className="mx-auto max-w-5xl px-5 py-14 sm:px-8">
      <h1 className="font-display text-4xl font-semibold sm:text-5xl">Your pots</h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_1fr]">
        {/* --------------------------------------------------- line items */}
        <div>
          <ul className="divide-y divide-line rounded-2xl border border-line">
            {cart.lines.map((line) => (
              <li key={line.key} className="flex items-center justify-between gap-4 p-5">
                <div>
                  <p className="font-medium">{line.itemName}</p>
                  <p className="text-sm text-ink-muted">
                    {line.sizeLabel}
                    {line.spice ? ` · ${line.spice}` : ""}
                  </p>
                  <button
                    type="button"
                    onClick={() => cart.remove(line.key)}
                    className="mt-1 text-xs text-ink-muted underline decoration-ink-muted/40 underline-offset-4 hover:text-accent"
                  >
                    Remove
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center rounded-lg border border-line">
                    <button
                      type="button"
                      aria-label={`Decrease ${line.itemName} quantity`}
                      onClick={() => cart.setQty(line.key, line.qty - 1)}
                      className="px-3 py-1.5 text-ink-muted hover:text-ink"
                    >
                      −
                    </button>
                    <span className="min-w-6 text-center font-mono-num text-sm">{line.qty}</span>
                    <button
                      type="button"
                      aria-label={`Increase ${line.itemName} quantity`}
                      onClick={() => cart.setQty(line.key, line.qty + 1)}
                      className="px-3 py-1.5 text-ink-muted hover:text-ink"
                    >
                      +
                    </button>
                  </div>
                  <span className="w-24 text-right font-mono-num text-sm">
                    {naira(line.unitPriceNaira * line.qty)}
                  </span>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex items-center justify-between rounded-2xl border border-line bg-surface px-5 py-4">
            <span className="font-display text-lg font-semibold">Subtotal</span>
            <span className="font-mono-num text-lg">{naira(cart.subtotal)}</span>
          </div>
          <p className="mt-2 text-xs text-ink-muted">
            Delivery fee, if any, is quoted on WhatsApp once {site.founderTitle} sees the distance.
          </p>
        </div>

        {/* ----------------------------------------------------- checkout */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="space-y-5 rounded-2xl border border-line bg-surface p-6"
        >
          <div>
            <span className="text-xs uppercase tracking-[0.12em] text-ink-muted">Fulfilment</span>
            <div className="mt-2 flex gap-2">
              {(["pickup", "delivery"] as const).map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFulfilment(f)}
                  className={`flex-1 rounded-lg border px-4 py-2 text-sm capitalize transition-colors ${
                    fulfilment === f
                      ? "border-accent bg-accent/10 text-ink"
                      : "border-line text-ink-muted hover:border-ink-muted"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            {fulfilment === "pickup" && (
              <p className="mt-2 text-xs text-ink-muted">
                {site.address.line}, {site.address.area}
              </p>
            )}
          </div>

          {fulfilment === "delivery" && (
            <label className="block text-sm">
              Delivery address
              <input
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Street, area, landmark"
                className="mt-1.5 w-full rounded-lg border border-line bg-ground px-3 py-2 text-sm outline-none focus:border-accent"
              />
              {belowMinimum && (
                <span className="mt-1.5 block text-xs text-accent">
                  Delivery orders run from {naira(site.deliveryMinimum)} — add another pot or switch to pickup.
                </span>
              )}
            </label>
          )}

          <div className="grid grid-cols-2 gap-4">
            <label className="block text-sm">
              Date wanted
              <input
                type="date"
                required
                value={date}
                min={new Date().toISOString().slice(0, 10)}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-line bg-ground px-3 py-2 text-sm outline-none focus:border-accent"
              />
            </label>
            <label className="block text-sm">
              Time window
              <select
                value={timeWindow}
                onChange={(e) => setTimeWindow(e.target.value)}
                className="mt-1.5 w-full rounded-lg border border-line bg-ground px-3 py-2 text-sm outline-none focus:border-accent"
              >
                {timeWindows.map((w) => (
                  <option key={w.id} value={w.id}>
                    {w.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className="block text-sm">
            Name
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1.5 w-full rounded-lg border border-line bg-ground px-3 py-2 text-sm outline-none focus:border-accent"
            />
          </label>

          <label className="block text-sm">
            Phone number
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="080..."
              className="mt-1.5 w-full rounded-lg border border-line bg-ground px-3 py-2 text-sm outline-none focus:border-accent"
            />
          </label>

          <label className="block text-sm">
            Anything {site.founderTitle} should know
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              rows={3}
              placeholder="Extra pepper, no fish, leave at the gate…"
              className="mt-1.5 w-full resize-none rounded-lg border border-line bg-ground px-3 py-2 text-sm outline-none focus:border-accent"
            />
          </label>

          <button
            type="submit"
            disabled={!canSubmit}
            className="w-full rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-transform disabled:cursor-not-allowed disabled:opacity-40 enabled:active:scale-95"
          >
            Send order to {site.founderTitle} on WhatsApp
          </button>
          <p className="text-center text-xs text-ink-muted">
            Nothing is charged here — WhatsApp opens with your order filled in, and {site.founderTitle} confirms with you directly.
          </p>
        </form>
      </div>
    </section>
  );
}
