"use client";

import Link from "next/link";
import { PotIcon, BagIcon } from "./icons";
import { ThemeToggle } from "./ThemeToggle";
import { useCart } from "@/lib/cart-context";
import { site } from "@/config/site";

export function Header() {
  const { itemCount } = useCart();

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ground/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <PotIcon className="h-7 w-7 text-accent" />
          <span className="font-display text-xl font-semibold tracking-tight">
            {site.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-ink-muted sm:flex">
          <Link href="/menu" className="transition-colors hover:text-ink">
            Menu
          </Link>
          <Link href="/#story" className="transition-colors hover:text-ink">
            Yeye&rsquo;s story
          </Link>
          <Link href="/#faq" className="transition-colors hover:text-ink">
            FAQ
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/menu"
            className="text-sm text-ink-muted transition-colors hover:text-ink sm:hidden"
          >
            Menu
          </Link>
          <ThemeToggle />
          <Link
            href="/order"
            className="relative flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-accent hover:text-accent"
          >
            <BagIcon className="h-4 w-4" />
            <span className="hidden sm:inline">Your pots</span>
            {itemCount > 0 && (
              <span className="grid h-5 min-w-5 place-items-center rounded-full bg-accent px-1 font-mono-num text-xs text-accent-ink">
                {itemCount}
              </span>
            )}
          </Link>
        </div>
      </div>
    </header>
  );
}
