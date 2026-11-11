import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { LangProvider } from "@/lib/lang";

const cormorant = localFont({
  src: [
    {
      path: "./fonts/CormorantGaramond-latin.woff2",
      weight: "300 700",
      style: "normal",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = localFont({
  src: [
    {
      path: "./fonts/Inter-latin.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});

const vazirmatn = localFont({
  src: [
    {
      path: "./fonts/Vazirmatn-arabic.woff2",
      weight: "100 900",
      style: "normal",
    },
    {
      path: "./fonts/Vazirmatn-latin.woff2",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "GOLESTAN TEA — Pour. Wait. Breathe.",
  description:
    "A premium Persian-inspired tea brand. Loose-leaf tea, blended by hand — rose, cardamom, cinnamon. A cinematic scroll, in six scenes.",
  openGraph: {
    title: "GOLESTAN TEA — Pour. Wait. Breathe.",
    description:
      "A premium Persian-inspired tea brand. Loose-leaf tea, blended by hand — rose, cardamom, cinnamon.",
    images: ["/hero-poster.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorant.variable} ${inter.variable} ${vazirmatn.variable} antialiased bg-black text-[#F5F1E8]`}
      >
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
