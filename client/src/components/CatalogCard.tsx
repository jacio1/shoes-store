"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

type CatalogCardProps = {
  title: string;
  image: string;
  href: string;
  className?: string;
};

export default function CatalogCard({
  title,
  image,
  href,
  className,
}: CatalogCardProps) {
  return (
    <Link
      href={href}
      aria-label={title}
      className={cn(
        "group relative block overflow-hidden rounded-xl bg-muted shadow-sm transition-all duration-300 sm:rounded-2xl sm:hover:-translate-y-1 sm:hover:shadow-xl",
        className,
      )}
    >
      <div className="relative aspect-square">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 256px"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
        <h3 className="text-sm font-semibold text-white sm:text-base">
          {title}
        </h3>
      </div>
    </Link>
  );
}
