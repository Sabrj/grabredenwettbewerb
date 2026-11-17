"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  caption?: string;
}

interface PhotoGalleryProps {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
  credit?: string;
  variant?: "light" | "dark";
  inline?: boolean;
}

export default function PhotoGallery({
  images,
  title,
  subtitle,
  credit,
  variant = "light",
  inline = false,
}: PhotoGalleryProps) {
  const PER_PAGE = 3;
  const totalPages = Math.ceil(images.length / PER_PAGE);
  const [page, setPage] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const visibleImages = images.slice(page * PER_PAGE, page * PER_PAGE + PER_PAGE);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevLightbox = useCallback(() =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null)),
    [images.length]
  );
  const nextLightbox = useCallback(() =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null)),
    [images.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
      if (e.key === "ArrowRight") nextLightbox();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => { window.removeEventListener("keydown", handler); document.body.style.overflow = ""; };
  }, [lightboxIndex, closeLightbox, prevLightbox, nextLightbox]);

  const isDark = variant === "dark";
  const bg    = isDark ? "#14111c" : "#f7f3e8";
  const textMain = isDark ? "#f5f0e8" : "#2d1f3d";
  const textSub  = isDark ? "rgba(245,240,232,0.55)" : "rgba(45,31,61,0.55)";

  const inner = (
    <div className={inline ? "" : "container-section"}>
      {(title || subtitle || credit) && (
        <div className="mb-6 max-w-3xl">
          {title && <h2 className="font-serif text-2xl md:text-3xl font-black leading-tight mb-2" style={{ color: textMain }}>{title}</h2>}
          {subtitle && <p className="font-body text-sm leading-relaxed" style={{ color: textSub }}>{subtitle}</p>}
          {credit && <p className="font-body text-xs mt-2" style={{ color: textSub, opacity: 0.6 }}>{credit}</p>}
        </div>
      )}

      {/* Carousel grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5">
        {visibleImages.map((img, idx) => {
          const globalIdx = page * PER_PAGE + idx;
          return (
            <button
              key={img.src}
              onClick={() => setLightboxIndex(globalIdx)}
              className="relative overflow-hidden group focus:outline-none focus:ring-2 focus:ring-gold-400"
              style={{ aspectRatio: "4/3" }}
              aria-label={img.caption || `Bild ${globalIdx + 1}`}
            >
              <Image
                src={img.src}
                alt={img.caption || `Foto ${globalIdx + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {img.caption && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-300 flex items-end">
                  <p className="font-body text-xs text-white px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-snug">
                    {img.caption}
                  </p>
                </div>
              )}
            </button>
          );
        })}
        {/* Fill empty slots */}
        {visibleImages.length < PER_PAGE && Array.from({ length: PER_PAGE - visibleImages.length }).map((_, i) => (
          <div key={`empty-${i}`} className="hidden lg:block" style={{ aspectRatio: "4/3" }} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4">
          <button
            onClick={() => setPage((p) => Math.max(0, p - 1))}
            disabled={page === 0}
            className="flex items-center gap-2 font-body text-sm transition-colors disabled:opacity-30"
            style={{ color: isDark ? "rgba(245,240,232,0.6)" : "rgba(45,31,61,0.6)" }}
            aria-label="Vorherige"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
            Zurück
          </button>

          <div className="flex gap-1.5">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className="w-2 h-2 rounded-full transition-all"
                style={{ background: i === page ? (isDark ? "#d4a843" : "#352741") : (isDark ? "rgba(245,240,232,0.25)" : "rgba(45,31,61,0.2)") }}
                aria-label={`Seite ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
            disabled={page === totalPages - 1}
            className="flex items-center gap-2 font-body text-sm transition-colors disabled:opacity-30"
            style={{ color: isDark ? "rgba(245,240,232,0.6)" : "rgba(45,31,61,0.6)" }}
            aria-label="Nächste"
          >
            Weiter
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );

  if (inline) return <div>{inner}</div>;

  return (
    <section className="py-10 lg:py-14" style={{ background: bg }}>
      {inner}
    </section>
  );
}
