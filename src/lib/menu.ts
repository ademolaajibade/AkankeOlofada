// The menu. One typed source of truth — the home page spotlight, the full
// menu grid, and the cart all read from here.

export type Category =
  | "signature"
  | "sauces"
  | "rice"
  | "sides";

export type SpiceLevel = "mild" | "regular" | "fire";

export const spiceLevels: { id: SpiceLevel; label: string; note: string }[] = [
  { id: "mild", label: "Mild", note: "pepper for flavour, not for war" },
  { id: "regular", label: "Yeye's Regular", note: "how it leaves the pot" },
  { id: "fire", label: "Fire", note: "you asked for it" },
];

export interface SizeOption {
  /** e.g. "1L", "Full Paint", "Bowl" */
  label: string;
  /** short helper shown under the label, e.g. "feeds 2–3" */
  serves?: string;
  priceNaira: number;
}

export interface MenuItem {
  id: string;
  name: string;
  localName?: string;
  category: Category;
  short: string;
  description: string;
  yeyeNote: string;
  sizes: SizeOption[];
  spicy: boolean;
  unitNote?: string;
  tags: string[];
}

export const categoryLabel: Record<Category, string> = {
  signature: "Signature",
  sauces: "Sauces & Stews",
  rice: "Rice",
  sides: "Sides & Sweet",
};

export const menu: MenuItem[] = [
  {
    id: "ayamashe",
    name: "Ayamashe Sauce",
    localName: "Ayamase",
    category: "signature",
    short: "The green stew. Bleached palm oil, tatashe, rodo, iru, and time.",
    description:
      "Nicknamed 'designer stew' for the deep bottle-green sheen the palm oil takes on once it's bleached and cooked all the way down with tatashe, rodo, iru and a mix of assorted meat and fish. This is the one the canteen was actually known for — everything else came after.",
    yeyeNote:
      "The oil bleaches for eleven minutes, not ten, not twelve. Rush it and the sauce forgets to shine.",
    sizes: [
      { label: "0.5L", serves: "feeds 1–2", priceNaira: 4500 },
      { label: "1L", serves: "feeds 3–4", priceNaira: 8500 },
      { label: "2L", serves: "feeds 6–7", priceNaira: 16000 },
      { label: "5L", serves: "the family pot", priceNaira: 37500 },
    ],
    spicy: true,
    tags: ["contains iru", "contains assorted meat & fish", "freezes well, 3 months"],
  },
  {
    id: "stew",
    name: "Stew Sauce",
    localName: "Obe Ata Din-Din",
    category: "sauces",
    short: "The everyday red stew — tomato, pepper, onion, cooked down slow.",
    description:
      "The stew under the jollof, the stew over the beans, the stew that goes with whatever's left in the freezer. Tomato and tatashe cooked down until the oil floats clear on top, no shortcuts taken with the base.",
    yeyeNote: "If the oil hasn't floated to the top, it isn't done. I don't rush this one either.",
    sizes: [
      { label: "0.5L", serves: "feeds 1–2", priceNaira: 3500 },
      { label: "1L", serves: "feeds 3–4", priceNaira: 6500 },
      { label: "2L", serves: "feeds 6–7", priceNaira: 12000 },
    ],
    spicy: true,
    tags: ["vegetarian option on request", "freezes well, 3 months"],
  },
  {
    id: "egusi",
    name: "Egusi",
    category: "sauces",
    short: "Ground melon seed, thick and peppery, with assorted meat and stockfish.",
    description:
      "Fried in red oil until it crumbs and separates the way it should, then simmered with ugu, assorted meat, and stockfish. Thick enough to hold its shape on a spoon of eba.",
    yeyeNote: "A watery egusi is a sad egusi. Mine stands up.",
    sizes: [
      { label: "0.5L", serves: "feeds 1–2", priceNaira: 4500 },
      { label: "1L", serves: "feeds 3–4", priceNaira: 8500 },
      { label: "2L", serves: "feeds 6–7", priceNaira: 16000 },
    ],
    spicy: true,
    tags: ["contains stockfish & crayfish", "pescatarian option on request"],
  },
  {
    id: "efo",
    name: "Efo Riro",
    category: "sauces",
    short: "Greens cooked down with iru, pepper, and smoked fish.",
    description:
      "Shredded spinach and greens, cooked just past bright, carried by a red pepper base heavy on the iru. The one people order when they want something green that still eats like a proper stew.",
    yeyeNote: "Blanch the greens too long and you've made spinach water, not efo. I don't do that here.",
    sizes: [
      { label: "0.5L", serves: "feeds 1–2", priceNaira: 3800 },
      { label: "1L", serves: "feeds 3–4", priceNaira: 7000 },
      { label: "2L", serves: "feeds 6–7", priceNaira: 13000 },
    ],
    spicy: true,
    tags: ["contains iru & smoked fish", "vegetarian option on request"],
  },
  {
    id: "ofada",
    name: "Ofada Rice",
    category: "rice",
    short: "Unpolished local rice, steamed plain — the natural partner for ayamashe.",
    description:
      "Short, unpolished grains with the bran left on, steamed plain so the sauce does the talking. Ask for it wrapped in uma leaf if you want the aroma the canteen crowd always asked for.",
    yeyeNote: "Rice this short doesn't need salt in the pot. It needs a good stew sitting next to it.",
    unitNote: "Sold by the paint — the 4-litre keg Lagos food sellers measure rice with. Half paint feeds 2–3, full paint feeds 5–6.",
    sizes: [
      { label: "Half Paint", serves: "feeds 2–3", priceNaira: 4000 },
      { label: "Full Paint", serves: "feeds 5–6", priceNaira: 7500 },
    ],
    spicy: false,
    tags: ["+₦500 for uma leaf wrap", "pairs with ayamashe"],
  },
  {
    id: "jollof",
    name: "Jollof Rice",
    category: "rice",
    short: "Party-style, smoked over firewood for the edge everyone asks about.",
    description:
      "Cooked the party way — parboiled, smoked over an open flame at the end for the char that separates real jollof from the rest, then finished with a little extra pepper. No apologies about the smoke.",
    yeyeNote: "People ask what I put in it. I put fire in it. That's the whole secret.",
    unitNote: "Sold by the paint — the 4-litre keg Lagos food sellers measure rice with. Half paint feeds 2–3, full paint feeds 5–6.",
    sizes: [
      { label: "Half Paint", serves: "feeds 2–3", priceNaira: 4500 },
      { label: "Full Paint", serves: "feeds 5–6", priceNaira: 8500 },
    ],
    spicy: false,
    tags: ["smoked finish", "contains liver on request"],
  },
  {
    id: "tapioca",
    name: "Tapioca with Exotic Fruits",
    localName: "Ekong",
    category: "sides",
    short: "Chilled coconut tapioca, mango, pawpaw, pineapple, toasted coconut.",
    description:
      "Small tapioca pearls cooked slow in coconut milk until they turn glassy, chilled, then finished at the table with mango, pawpaw, pineapple, a scatter of toasted coconut, and mint. The one thing on the menu that isn't trying to be dinner.",
    yeyeNote: "Serve it too warm and the fruit wilts. I chill the bowls before I chill the tapioca.",
    sizes: [
      { label: "Bowl", serves: "one, 500ml", priceNaira: 2800 },
      { label: "1L", serves: "party size, 4–5", priceNaira: 9500 },
    ],
    spicy: false,
    tags: ["dairy-free", "contains coconut"],
  },
];

export function findItem(id: string): MenuItem | undefined {
  return menu.find((m) => m.id === id);
}
