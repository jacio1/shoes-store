"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ProductGallery({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [active, setActive] = useState(0);

  if (images.length === 0) {
    return (
      <div className="aspect-square w-full rounded-xl bg-muted sm:rounded-2xl" />
    );
  }

  return (
    <div className="space-y-3">
      <div className="relative aspect-square overflow-hidden rounded-xl bg-muted sm:rounded-2xl">
        <Image
          src={images[active]}
          alt={alt}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Фото ${i + 1}`}
              className={cn(
                "relative aspect-square overflow-hidden rounded-lg border bg-muted transition",
                i === active
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                  : "opacity-80 hover:opacity-100",
              )}
            >
              <Image
                src={src}
                alt={`${alt} — фото ${i + 1}`}
                fill
                sizes="96px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}