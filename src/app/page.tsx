import Link from "next/link";
import { MenuItemCard } from "@/components/MenuItemCard";
import { PepperIcon, LadleIcon, LeafIcon, GrainRow, ChevronIcon } from "@/components/icons";
import { menu, findItem } from "@/lib/menu";
import { site } from "@/config/site";

const ayamashe = findItem("ayamashe")!;
const others = menu.filter((m) => m.id !== "ayamashe");

const process = [
  {
    step: "01",
    title: "The pepper rests",
    body: "Tatashe and rodo are deveined and left to sit — not blended straight away. Rushing this step is the first way people ruin ayamase.",
  },
  {
    step: "02",
    title: "The oil bleaches",
    body: "Palm oil is heated until it clears and takes on that first hint of green. Eleven minutes, timed, every batch.",
  },
  {
    step: "03",
    title: "It cooks down",
    body: "Pepper, iru, and assorted meat go in and reduce for the better part of an hour, until the oil separates and sits on top in a dark green ring.",
  },
];

const testimonials = [
  {
    quote:
      "I used to drive forty minutes to the canteen just for the green stew. Now I keep two litres in the freezer and portion it out like it's precious. Because it is.",
    name: "Tobi A.",
    context: "moved from Ikorodu to Abuja, 2022",
  },
  {
    quote:
      "My mother tasted it and asked who taught me to cook. I didn't correct her.",
    name: "Chiamaka O.",
    context: "orders the 2L ayamashe monthly",
  },
  {
    quote:
      "The paint of jollof fed my whole compound at the send-forth and there was still a scoop left for the caterer to be embarrassed about.",
    name: "Segun F.",
    context: "Ojota",
  },
];

const faqs = [
  {
    q: "Isn't ayamase supposed to be aggressively spicy?",
    a: "Only if you ask for it that way. Every sauce order gets a spice level — Mild, Yeye's Regular, or Fire — chosen at checkout, not decided for you.",
  },
  {
    q: "How do I store and reheat a litre?",
    a: "Freeze it flat, it keeps for up to 3 months. Thaw overnight in the fridge and warm it gently on the stove or in short microwave bursts — a hard boil can split the palm oil, and split stew never looks the same twice.",
  },
  {
    q: "Can you leave out crayfish, stockfish, or iru for allergies or preference?",
    a: "Yes — say so in the note field at checkout. Egusi and efo have pescatarian and vegetarian versions on request; the ayamashe's assorted meat can also be left out.",
  },
  {
    q: "Do you deliver outside Lagos, or abroad?",
    a: "Nationwide, yes — sealed and sent by interstate park, 2 to 4 days depending on the state. Export packaging for outside Nigeria isn't ready yet; it's the next thing we're working out, not a permanent no.",
  },
  {
    q: "What's a 'paint' of rice?",
    a: "The 4-litre rubber keg a lot of Lagos food sellers measure rice with — old paint containers, repurposed. Half paint feeds 2–3 people, full paint feeds 5–6.",
  },
];

export default function Home() {
  return (
    <>
      {/* ---------------------------------------------------------- Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-14 sm:px-8 sm:pt-20">
        <div className="grid gap-12 md:grid-cols-[1.15fr_1fr] md:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-xs uppercase tracking-[0.12em] text-ink-muted">
              <PepperIcon className="h-3.5 w-3.5 text-accent" />
              Today&rsquo;s pots: Ayamashe, Egusi, Ofada Rice, Tapioca
            </span>

            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              {site.tagline}
            </h1>

            <p className="prose-copy mt-6 text-lg leading-relaxed text-ink-muted">
              A good ayamase tells you it&rsquo;s ready by its colour — a deep,
              almost-black green, oil sitting clean on top. {site.founderTitle} has been
              getting it there since {site.founded}, and now she sells it by the
              litre so you don&rsquo;t have to stand over a pot for an hour to have it.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-accent-ink transition-transform active:scale-95"
              >
                See the menu
              </Link>
              <a
                href="#story"
                className="rounded-full border border-line px-6 py-3 text-sm transition-colors hover:border-ink-muted"
              >
                Read Yeye&rsquo;s story
              </a>
            </div>
          </div>

          <div className="relative rounded-2xl border border-line bg-surface p-8 sm:p-10">
            <div
              aria-hidden
              className="absolute inset-0 rounded-2xl opacity-70"
              style={{
                background:
                  "radial-gradient(120% 90% at 20% 0%, color-mix(in srgb, var(--accent-2) 18%, transparent), transparent 60%)",
              }}
            />
            <div className="relative">
              <LadleIcon className="h-10 w-10 text-accent" />
              <p className="mt-6 font-display text-2xl leading-snug">
                &ldquo;If the oil hasn&rsquo;t turned, the pot isn&rsquo;t done.
                I don&rsquo;t care what the clock says.&rdquo;
              </p>
              <p className="mt-4 text-sm uppercase tracking-[0.12em] text-ink-muted">
                — {site.founderTitle}, on why the sauce takes as long as it takes
              </p>
              <GrainRow className="mt-8 h-3 w-full text-ink-muted/50" />
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- What it is */}
      <section className="border-y border-line bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">
              What &ldquo;ayamashe&rdquo; actually is
            </h2>
            <p className="prose-copy mt-4 leading-relaxed text-ink-muted">
              Properly called ayamase, and spelled ayamashe just as often. Nicknamed
              &ldquo;designer stew&rdquo; for the way bleached palm oil turns bottle-green
              once it&rsquo;s cooked down with tatashe, rodo, and iru. It&rsquo;s not a
              variation on stew — it&rsquo;s its own three-step process, and skipping a
              step is the whole difference between a good pot and a forgettable one.
            </p>
          </div>

          <ol className="mt-10 grid gap-6 sm:grid-cols-3">
            {process.map((p) => (
              <li key={p.step} className="rounded-2xl border border-line bg-surface p-6">
                <span className="font-mono-num text-sm text-accent">{p.step}</span>
                <h3 className="mt-3 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{p.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* -------------------------------------------------- Signature */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">The signature pot</h2>
        </div>
        <div className="mt-8">
          <MenuItemCard item={ayamashe} variant="spotlight" />
        </div>
      </section>

      {/* --------------------------------------------------- Full table */}
      <section className="border-y border-line bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h2 className="font-display text-3xl font-semibold sm:text-4xl">The rest of the table</h2>
            <Link href="/menu" className="text-sm text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent">
              Full menu →
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.slice(0, 3).map((item) => (
              <MenuItemCard key={item.id} item={item} variant="grid" />
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- Story */}
      <section id="story" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <LeafIcon className="h-10 w-10 text-accent-2" />
            <h2 className="mt-6 font-display text-3xl font-semibold sm:text-4xl">
              Yeye&rsquo;s story
            </h2>
          </div>
          <div className="prose-copy text-base leading-relaxed text-ink-muted">
            <p>
              {site.founderTitle} ran the food side of a bus park canteen in Ikorodu
              for eleven years before {site.name} existed as its own name.
              Drivers and conductors ordered whatever was fastest — until the day
              she made ayamase because the usual stew pepper had finished, and it
              never went back to being a backup.
            </p>
            <p className="mt-4">
              Regulars started asking for &ldquo;the green stew&rdquo; by name, then
              asking her to pack extra to take home, then asking if she could
              set some aside every week whether they were passing through or not.
              When two of them relocated — one to Abuja, one to Portharcourt — they
              asked for it packed to survive a bus journey. That request is the
              reason {site.name} sells sauce by the litre today instead of only
              by the plate.
            </p>
            <p className="mt-4">
              The canteen is still open. The pots are the same size they&rsquo;ve
              always been — {site.name} just makes more of them now.
            </p>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------- How to order */}
      <section className="border-y border-line bg-surface/40">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">How ordering works</h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-3">
            {[
              { step: "01", title: "Pick your pots", body: "Choose sizes and spice levels across the menu — everything lands in Your Pots as you go." },
              { step: "02", title: "Say when and where", body: "Pickup in Ikorodu, or delivery — tell us the area and the day you want it." },
              { step: "03", title: "Confirm on WhatsApp", body: "Checkout builds the order into a message to Yeye. Nothing is charged until she confirms with you directly." },
            ].map((s) => (
              <li key={s.step} className="rounded-2xl border border-line bg-surface p-6">
                <span className="font-mono-num text-sm text-accent">{s.step}</span>
                <h3 className="mt-3 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ------------------------------------------------- Testimonials */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">What people order again</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col justify-between rounded-2xl border border-line bg-surface p-6">
              <blockquote className="text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
              <figcaption className="mt-5 text-xs uppercase tracking-[0.1em] text-ink-muted">
                {t.name} — {t.context}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* --------------------------------------------------------- FAQ */}
      <section id="faq" className="border-t border-line bg-surface/40">
        <div className="mx-auto max-w-3xl scroll-mt-20 px-5 py-16 sm:px-8">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">Questions people actually ask</h2>
          <div className="mt-8 divide-y divide-line">
            {faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base font-medium">
                  {f.q}
                  <ChevronIcon className="h-5 w-5 shrink-0 text-ink-muted transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
