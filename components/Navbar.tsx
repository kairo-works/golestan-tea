"use client";

import { useEffect, useState } from "react";
import { useLang, type Lang } from "@/lib/lang";

export default function Navbar() {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggle = (l: Lang) => setLang(l);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-out ${
        scrolled
          ? "backdrop-blur-md bg-black/45 border-b border-[#C9A961]/15"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#top"
          className="font-display text-lg tracking-[0.28em] text-[#F5F1E8] mix-blend-difference sm:text-xl"
        >
          {lang === "fa" ? "چای گلستان" : "GOLESTAN TEA"}
        </a>

        <div className="flex items-center gap-5 sm:gap-8">
          <a
            href="#collection"
            className="smallcaps hidden text-[11px] text-[#F5F1E8]/80 transition-colors duration-500 hover:text-[#C9A961] sm:block"
          >
            {t.navCollection}
          </a>
          <a
            href="#collection"
            className="smallcaps hidden text-[11px] text-[#F5F1E8]/80 transition-colors duration-500 hover:text-[#C9A961] md:block"
          >
            {t.navBegin}
          </a>

          {/* EN / FA toggle */}
          <div
            className="flex items-center rounded-full border border-[#C9A961]/40 p-0.5"
            role="group"
            aria-label="Language"
          >
            {(["en", "fa"] as Lang[]).map((l) => (
              <button
                key={l}
                type="button"
                onClick={() => toggle(l)}
                aria-pressed={lang === l}
                className={`rounded-full px-3 py-1 text-[11px] tracking-[0.2em] transition-all duration-500 ease-out ${
                  lang === l
                    ? "bg-[#C9A961] text-black"
                    : "text-[#F5F1E8]/70 hover:text-[#C9A961]"
                }`}
              >
                {l === "en" ? "EN" : "فا"}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
