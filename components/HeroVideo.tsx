"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLang } from "@/lib/lang";

gsap.registerPlugin(ScrollTrigger);

/** Opacity for a headline visible between [start, end] of scroll progress.
 *  Fades in over the first 20% of its range, out over the last 20%. */
function opacityFor(p: number, start: number, end: number): number {
  if (p < start || p > end) return 0;
  const span = end - start;
  const fade = span * 0.2;
  if (p < start + fade) return (p - start) / fade;
  if (p > end - fade) return (end - p) / fade;
  return 1;
}

const RANGES = [
  { start: 0.15, end: 0.25 },
  { start: 0.35, end: 0.45 },
  { start: 0.6, end: 0.7 },
  { start: 0.85, end: 1.0 },
];

export default function HeroVideo() {
  const { t, lang } = useLang();
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const introRef = useRef<HTMLDivElement | null>(null);
  const lineRefs = useRef<(HTMLDivElement | null)[]>([]);

  const lines = [t.line1, t.line2, t.line3, t.line4];

  useLayoutEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    // Explicit load, as the guide requires.
    video.load();

    if (reduced) {
      // No scrub, no autoplay: poster + intro stay put.
      return;
    }

    let duration = 0;
    const onMeta = () => {
      duration = video.duration;
    };
    video.addEventListener("loadedmetadata", onMeta);
    if (video.readyState >= 1) duration = video.duration;

    if (isMobile) {
      // Mobile: autoplay + loop, never scrub (iOS Safari blanks paused scrub).
      video.loop = true;
      const tryPlay = () => {
        video.play().catch(() => {
          /* autoplay blocked until a gesture — retry on first touch */
        });
      };
      tryPlay();
      const onGesture = () => {
        if (video.paused) tryPlay();
      };
      window.addEventListener("pointerdown", onGesture, { once: true });
      window.addEventListener("touchstart", onGesture, { once: true });
      // Keep the listeners registered for cleanup tracking.
      (video as unknown as { __gesture?: () => void }).__gesture = onGesture;
    }

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: "bottom bottom",
        scrub: isMobile ? true : 0.6,
        onUpdate: (self) => {
          const p = self.progress;

          // Desktop only: map scroll progress -> video.currentTime.
          // Seek only while paused (the video never plays on desktop).
          if (!isMobile && video.paused && Number.isFinite(duration) && duration > 0) {
            const target = p * duration;
            // Avoid redundant seeks.
            if (Math.abs(video.currentTime - target) > 0.04) {
              try {
                video.currentTime = target;
              } catch {
                /* seek interrupted by a newer one — ignore */
              }
            }
          }

          // Overlay headlines.
          lineRefs.current.forEach((el, i) => {
            if (!el) return;
            const o = opacityFor(p, RANGES[i].start, RANGES[i].end);
            el.style.opacity = String(o);
            el.style.transform = `translateY(${(1 - o) * 24}px)`;
          });

          // Intro fades out in the first 12% of the scroll.
          if (introRef.current) {
            const o = p < 0.08 ? 1 : p < 0.12 ? 1 - (p - 0.08) / 0.04 : 0;
            introRef.current.style.opacity = String(Math.max(0, o));
            introRef.current.style.transform = `translateY(${-p * 60}px)`;
          }
        },
      });
    }, section);

    return () => {
      ctx.revert();
      video.removeEventListener("loadedmetadata", onMeta);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative h-[450vh] bg-black"
      aria-label="Golestan Tea — cinematic scroll"
    >
      {/* Sticky stage */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero.mp4"
          poster="/hero-poster.jpg"
          playsInline
          muted
          preload="auto"
          aria-label="Golestan Tea — a teabag falls, bursts into six ingredients, and steeps into golden amber"
        />
        {/* Vignette + legibility scrim */}
        <div className="hero-vignette pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/70" />

        {/* Intro — visible at the top of the scroll */}
        <div
          ref={introRef}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        >
          <p className="smallcaps text-[11px] text-[#C9A961] sm:text-xs">
            {t.heroKicker}
          </p>
          <h1
            lang={lang}
            className="mt-5 font-display text-5xl font-light leading-none tracking-[0.12em] text-[#F5F1E8] sm:text-7xl md:text-8xl"
          >
            {t.heroTitle}
          </h1>
          <p
            lang={lang}
            className="mt-6 max-w-xl text-sm font-light leading-relaxed text-[#F5F1E8]/75 sm:text-base"
          >
            {t.heroSub}
          </p>
          <div className="mt-10 flex flex-col items-center gap-2">
            <span className="smallcaps text-[10px] text-[#F5F1E8]/60">
              {t.heroScroll}
            </span>
            <span className="block h-10 w-px bg-gradient-to-b from-[#C9A961] to-transparent" />
          </div>
        </div>

        {/* Scroll-driven headlines */}
        {lines.map((line, i) => (
          <div
            key={i}
            ref={(el) => {
              lineRefs.current[i] = el;
            }}
            className="hero-line pointer-events-none absolute inset-0 flex items-center justify-center px-6 opacity-0"
          >
            <h2
              lang={lang}
              className="text-center font-display text-4xl font-light leading-tight tracking-[0.08em] text-[#F5F1E8] [text-shadow:0_2px_30px_rgba(0,0,0,0.85)] sm:text-6xl md:text-7xl"
            >
              {line}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
}
