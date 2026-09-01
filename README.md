# AkankeOlofada

Nigerian sauces and sides, sold by the litre — built around Elépo's
signature ayamashe. Next.js 16 (App Router) + TypeScript + Tailwind v4.
No backend: the cart lives in `localStorage`, and checkout hands the
order to WhatsApp as a prefilled message.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000. `npm run build && npm run start` for a
production build, `npm run lint` for ESLint.

## Before this goes live

Everything vendor-specific is centralized so a real launch is a
content edit, not a code change:

- **`src/config/site.ts`** — business name, tagline, WhatsApp number,
  Instagram, email, address, hours, delivery areas/minimum. The
  WhatsApp number is a placeholder (`2348000000000`) — replace it with
  the real one, digits only, country code first, no `+`.
- **`src/lib/menu.ts`** — every dish: sizes, prices (₦), spice levels,
  descriptions, and the "Yeye's note" line under each item. Prices
  here are realistic placeholders, not sourced pricing — adjust freely.

## How ordering works

There's no payment integration on purpose — WhatsApp ordering is how
this market actually transacts. A customer builds a cart across
`/menu`, reviews it and fills in delivery details on `/order`, and
"Send order to Yeye on WhatsApp" opens `wa.me` with the itemized order
already typed out. Nothing is charged in-app; confirmation happens in
the chat.

## Structure

```
src/
  app/            home, /menu, /order — the three routes
  components/     Header, Footer, MenuItemCard (the add-to-cart unit),
                  ThemeToggle, hand-drawn brand icons
  lib/            menu data, cart context (+ localStorage), currency
                  formatting, WhatsApp message builder
  config/site.ts  business identity & contact details
```

Dark is the primary theme — it's the colour ayamashe actually turns
once the palm oil is bleached and cooked down. Light is the same
kitchen by day. Both follow the visitor's system preference by
default; the toggle in the header overrides and remembers the choice.

No product photography is used — the site leans on typography and a
small set of hand-drawn line icons (pot, ladle, pepper, leaf) instead
of stock imagery.

