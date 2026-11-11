"use client";

import Image from "next/image";

type ProductCardProps = {
  name: string;
  desc: string;
  chip: string;
  price: string;
  image: string;
  alt: string;
};

export default function ProductCard({
  name,
  desc,
  chip,
  price,
  image,
  alt,
}: ProductCardProps) {
  return (
    <article className="product-card group relative overflow-hidden rounded-sm border border-[#C9A961]/25 bg-[#0a0a0a]">
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
        {/* Floating ingredient chip — frosted glass, appears on hover */}
        <div className="ingredient-chip absolute left-4 top-4 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[11px] tracking-[0.14em] text-[#F5F1E8] backdrop-blur-md">
          {chip}
        </div>
      </div>

      <div className="px-6 pb-7 pt-5">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl font-light tracking-[0.06em] text-[#F5F1E8]">
            {name}
          </h3>
          <span className="whitespace-nowrap font-display text-xl text-[#C9A961]">
            {price}
          </span>
        </div>
        <p className="mt-3 text-sm font-light leading-relaxed text-[#F5F1E8]/70">
          {desc}
        </p>
        <div className="mt-5 h-px w-10 bg-[#C9A961]/70 transition-all duration-700 ease-out group-hover:w-20" />
      </div>
    </article>
  );
}
