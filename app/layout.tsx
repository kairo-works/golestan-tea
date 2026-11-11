import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/lib/lang";

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
    <html
      lang="en"
      style={
        {
          "--font-cormorant": "Georgia, 'Times New Roman', serif",
          "--font-inter":
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
          "--font-vazirmatn":
            "Tahoma, 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, 'Helvetica Neue', Arial, sans-serif",
        } as React.CSSProperties
      }
    >
      <body className="antialiased bg-black text-[#F5F1E8]">
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
