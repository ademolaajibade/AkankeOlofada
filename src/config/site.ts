// Business identity and contact details.
// The phone number and handles below are placeholders — swap them for the
// real ones before this goes live. Everywhere else in the app reads from
// this file, so a real launch only ever means editing here.

export const site = {
  name: "Akankeolofada",
  legalName: "Akankeolofada Kitchen",
  tagline: "The pot doesn't lie.",
  founded: 2016,
  founderTitle: "Yeye", // honorific the vendor is known by, used through the copy
  description:
    "Nigerian sauces and sides, made the slow way and sold by the litre — led by Akankeolofada's ayamashe, the green stew regulars used to fight over.",

  // Ordering contact — a WhatsApp order is built client-side and opened
  // as a wa.me link. Digits only, country code included, no leading +.
  whatsappNumber: "2348000000000",
  instagramHandle: "@akankeolofada.kitchen",
  email: "hello@akankeolofada.example",

  address: {
    line: "Along Abule-egba Road, by the old bus park canteen",
    area: "Abule-egba, Lagos",
  },

  hours: [
    { day: "Tuesday – Friday", time: "9:00am – 6:00pm" },
    { day: "Saturday", time: "8:00am – 4:00pm" },
    { day: "Sunday – Monday", time: "Pots resting — no orders" },
  ],

  deliveryAreas: [
    "Ikorodu, Ojota, Ketu, Mile 12 — same-day",
    "Rest of Lagos — next-day, rider fee quoted on WhatsApp",
    "Outside Lagos — vacuum-sealed and sent by interstate park, 2–4 days",
  ],

  deliveryMinimum: 10000, // naira, delivery orders outside pickup
} as const;
