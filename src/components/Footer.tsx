import Link from "next/link";
import { PotIcon } from "./icons";
import { site } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <PotIcon className="h-6 w-6 text-accent" />
            <span className="font-display text-lg font-semibold">{site.name}</span>
          </div>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-ink-muted">
            {site.description}
          </p>
        </div>

        <div className="text-sm">
          <h3 className="font-display text-xs uppercase tracking-[0.14em] text-ink-muted">
            Find the pot
          </h3>
          <p className="mt-3 leading-relaxed">
            {site.address.line}
            <br />
            {site.address.area}
          </p>
          <ul className="mt-4 space-y-1 text-ink-muted">
            {site.hours.map((h) => (
              <li key={h.day} className="flex justify-between gap-4">
                <span>{h.day}</span>
                <span className="font-mono-num">{h.time}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-sm">
          <h3 className="font-display text-xs uppercase tracking-[0.14em] text-ink-muted">
            Reach {site.founderTitle}
          </h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a
                href={`https://wa.me/${site.whatsappNumber}`}
                className="transition-colors hover:text-accent"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={`https://instagram.com/${site.instagramHandle.replace("@", "")}`}
                className="transition-colors hover:text-accent"
              >
                {site.instagramHandle}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="transition-colors hover:text-accent">
                {site.email}
              </a>
            </li>
          </ul>
          <Link
            href="/menu"
            className="mt-6 inline-block text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
          >
            See the full menu →
          </Link>
        </div>
      </div>
      <div className="border-t border-line px-5 py-5 text-center text-xs text-ink-muted sm:px-8">
        {site.legalName} · {site.address.area} · pots made since {site.founded}
      </div>
    </footer>
  );
}
