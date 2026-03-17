"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  alt: string;
}

export default function ImageCarousel({ images, alt }: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const total = images.length;

  const goTo = (idx: number) => setCurrent((idx + total) % total);

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-muted/40 shadow-md bg-black/10">
      <Image
        src={images[current]}
        alt={alt + ` (${current + 1})`}
        fill
        className="object-cover transition-opacity duration-300"
        priority
      />
      {total > 1 && (
        <>
          {/* Prev/Next Buttons */}
          <button
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 shadow transition disabled:opacity-30"
            onClick={() => goTo(current - 1)}
            aria-label="Previous image"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M15 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1.5 shadow transition disabled:opacity-30"
            onClick={() => goTo(current + 1)}
            aria-label="Next image"
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          {/* Dots */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`w-2.5 h-2.5 rounded-full border border-white/60 bg-white/70 transition-all duration-200 ${idx === current ? "scale-110 bg-violet-400" : "opacity-60"}`}
                onClick={() => goTo(idx)}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
