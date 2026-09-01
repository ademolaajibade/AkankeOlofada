import { site } from "@/config/site";
import { naira } from "./format";
import type { CartLine } from "./cart-context";

export interface CheckoutDetails {
  name: string;
  phone: string;
  fulfilment: "pickup" | "delivery";
  address?: string;
  when: string;
  note?: string;
}

export function buildOrderMessage(
  lines: CartLine[],
  subtotal: number,
  details: CheckoutDetails
): string {
  const itemLines = lines
    .map((l) => {
      const spice = l.spice ? `, ${l.spice} spice` : "";
      return `• ${l.itemName} — ${l.sizeLabel}${spice} × ${l.qty} — ${naira(
        l.unitPriceNaira * l.qty
      )}`;
    })
    .join("\n");

  const fulfilmentLine =
    details.fulfilment === "pickup"
      ? `Pickup at ${site.address.line}, ${site.address.area}`
      : `Delivery to: ${details.address || "(address not given)"}`;

  return [
    `Hello ${site.founderTitle}, I'd like to order from ${site.name}:`,
    "",
    itemLines,
    "",
    `Subtotal: ${naira(subtotal)}`,
    fulfilmentLine,
    `Wanted for: ${details.when}`,
    `Name: ${details.name}`,
    `Phone: ${details.phone}`,
    details.note ? `Note: ${details.note}` : undefined,
  ]
    .filter((line): line is string => line !== undefined)
    .join("\n");
}

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
