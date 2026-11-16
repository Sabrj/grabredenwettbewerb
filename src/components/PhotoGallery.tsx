"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface GalleryImage {
  src: string;
  caption?: string;
}

interface PhotoGalleryProps {
  images: GalleryImage[];
  title: string;
  subtitle?: string;
  credit?: string;
  variant?: "light" | "dark";
}

export default function PhotoGallery({
  images,
  title,
  subtitle,
  credit,
  variant = "light",
}: PhotoGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(() =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null)),
    [images.length]
  );
  const next = useCallback(() =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null)),
    [images.length]
  );

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, close, prev, next]);

  const isDark = variant === "dark";
  const bg = isDark ? "#14111c" : "#f7f3e8";
  const textMain = isDark ? "#f5f0e8" : "#2d1f3d";
  const textSub = isDark ? "rgba(245,240,232,0.55)" : "rgba(45,31,61,0.55)";

  return (
    <section className="py-14 lg:py-20" style={{ background: bg }}>
      <div className="container-section">
        {/* Header */}
        <div className="mb-8 max-w-3xl">
          <h2 className="font-serif text-2xl md:text-3xl font-black leading-tight mb-2"
            style={{ color: textMain }}>
            {title}
          </h2>
          {subtitle && (
            <p className="font-body text-base leading-relaxed" style={{ color: textSub }}>
              {subtitle}
            </p>
          )}
          {credit && (
            <p className="font-body text-xs mt-2" style={{ color: textSub, opacity: 0.7 }}>
              {credit}
            </p>
          )}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-1.5">
          {images.map((img, idx) => (
            <button
              key={img.src}
              onClick={() => setLightboxIndex(idx)}
              className="relative aspect-square overflow-hidden group focus:outline-none focus:ring-2 focus:ring-gold-400"
              aria-label={img.caption || `Bild ${idx + 1}`}
            >
              <Image
                src={img.src}
                alt={img.caption || `Foto ${idx + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {img.caption && (
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
                  <p className="font-body text-xs text-white px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-snug">
                    {img.caption}
                  </p>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
          onClick={close}
        >
          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors z-10"
            aria-label="Vorheriges Bild"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl w-full mx-16 md:mx-24"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative" style={{ aspectRatio: "4/3" }}>
              <Image
                src={images[lightboxIndex].src}
                alt={images[lightboxIndex].caption || ""}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </div>
            {images[lightboxIndex].caption && (
              <p className="font-body text-sm text-white/70 text-center mt-4 leading-relaxed px-4">
                {images[lightboxIndex].caption}
              </p>
            )}
            <p className="font-body text-xs text-white/30 text-center mt-2">
              {lightboxIndex + 1} / {images.length}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center text-white/70 hover:text-white transition-colors z-10"
            aria-label="Nächstes Bild"
          >
            <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
            </svg>
          </button>

          {/* Close */}
          <button
            onClick={close}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
            aria-label="Schließen"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
