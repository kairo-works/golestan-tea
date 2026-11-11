"use client";

import { useLang } from "@/lib/lang";
import ProductCard from "./ProductCard";

const PRODUCTS = [
  {
    key: "earl" as const,
    price: "~$18",
    image:
      "https://images.unsplash.com/photo-1490731727228-d56f39758d0e?q=80&w=800&auto=format&fit=crop",
    alt: "A hand holding a ceramic cup of brown tea",
  },
  {
    key: "ceylon" as const,
    price: "~$22",
    image:
      "https://images.unsplash.com/photo-1454438992604-4a8e59768a5a?q=80&w=800&auto=format&fit=crop",
    alt: "A black ceramic teacup on a table",
  },
  {
    key: "indian" as const,
    price: "~$26",
    image:
      "https://images.unsplash.com/photo-1750421806382-ffe8fc7f4dfe?q=80&w=800&auto=format&fit=crop",
    alt: "A tea set with two cups and a teapot",
  },
];

export default function Products() {
  const { t, lang } = useLang();

  return (
    <section id="collection" className="relative bg-black px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="frame-brackets mx-auto max-w-3xl px-2 text-center sm:px-6">
          <p className="smallcaps text-[11px] text-[#C9A961]">
            {t.collectionKicker}
          </p>
          <h2
            lang={lang}
            className="mt-4 font-display text-4xl font-light leading-tight tracking-[0.06em] text-[#F5F1E8] sm:text-5xl"
          >
            {t.collectionTitle}
          </h2>
          <p
            lang={lang}
            className="mx-auto mt-5 max-w-xl text-sm font-light leading-relaxed text-[#F5F1E8]/70 sm:text-base"
          >
            {t.collectionSub}
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3 md:gap-6 lg:gap-10">
          <ProductCard
            name={t.earlName}
            desc={t.earlDesc}
            chip={t.earlChip}
            price={PRODUCTS[0].price}
            image={PRODUCTS[0].image}
            alt={PRODUCTS[0].alt}
          />
          <ProductCard
            name={t.ceylonName}
            desc={t.ceylonDesc}
            chip={t.ceylonChip}
            price={PRODUCTS[1].price}
            image={PRODUCTS[1].image}
            alt={PRODUCTS[1].alt}
          />
          <ProductCard
            name={t.indianName}
            desc={t.indianDesc}
            chip={t.indianChip}
            price={PRODUCTS[2].price}
            image={PRODUCTS[2].image}
            alt={PRODUCTS[2].alt}
          />
        </div>

        <p
          lang={lang}
          className="mt-10 text-center text-xs font-light tracking-[0.14em] text-[#F5F1E8]/45"
        >
          {t.priceNote}
        </p>
      </div>
    </section>
  );
}
