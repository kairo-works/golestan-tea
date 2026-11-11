import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Vazirmatn } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/lang";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400"],
  variable: "--font-inter",
  display: "swap",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500"],
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
