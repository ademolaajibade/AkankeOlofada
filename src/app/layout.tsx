import type { Metadata } from "next";
import { Bricolage_Grotesque, Work_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart-context";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/config/site";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — Nigerian Sauces & Sides by the Litre`,
  description: site.description,
};

// Applied before paint so the toggle's stored choice never flashes the
// wrong theme on load.
const themeInitScript = `
try {
  var stored = localStorage.getItem("akankeolofada.theme");
  var wantsLight = stored ? stored === "light" : window.matchMedia("(prefers-color-scheme: light)").matches;
  if (wantsLight) document.documentElement.classList.add("light");
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${bricolage.variable} ${workSans.variable} ${plexMono.variable} antialiased`}>
        <CartProvider>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
