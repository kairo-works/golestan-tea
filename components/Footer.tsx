"use client";

import { useLang } from "@/lib/lang";

export default function Footer() {
  const { t, lang } = useLang();

  return (
    <footer className="border-t border-[#C9A961]/15 bg-black px-5 py-16 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
        <p
          lang={lang}
          className="font-display text-2xl font-light tracking-[0.28em] text-[#F5F1E8]"
        >
          {lang === "fa" ? "چای گلستان" : "GOLESTAN TEA"}
        </p>
        <p
          lang={lang}
          className="mt-3 font-display text-lg font-light italic tracking-[0.08em] text-[#C9A961]"
        >
          {t.footerTagline}
        </p>

        <div className="mt-8 h-px w-24 bg-[#C9A961]/70" />

        <p lang={lang} className="mt-8 text-sm font-light text-[#F5F1E8]/60">
          {t.footerContact}{" "}
          <a
            href="mailto:hello@golestan.example"
            className="text-[#C9A961] transition-colors duration-500 hover:text-[#F5F1E8]"
          >
            hello@golestan.example
          </a>
        </p>

        <div className="mt-6 flex items-center gap-6">
          <a
            href="https://www.instagram.com/golestantea"
            target="_blank"
            rel="noopener noreferrer"
            className="smallcaps text-[11px] text-[#F5F1E8]/70 transition-colors duration-500 hover:text-[#C9A961]"
          >
            Instagram
          </a>
          <span className="h-3 w-px bg-[#C9A961]/40" />
          <a
            href="https://x.com/golestantea"
            target="_blank"
            rel="noopener noreferrer"
            className="smallcaps text-[11px] text-[#F5F1E8]/70 transition-colors duration-500 hover:text-[#C9A961]"
          >
            X
          </a>
        </div>

        <p className="mt-10 text-xs font-light tracking-[0.14em] text-[#F5F1E8]/40">
          © 2026 GOLESTAN TEA — {t.footerRights}
        </p>
      </div>
    </footer>
  );
}
