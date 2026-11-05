"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, ShoppingBag } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

const product = {
  id: 1,
  productType: "Кроссовки утеплённые женские",
  productBrand: "Termit",
  productModel: "Sp Surfer Puff",
  price: 3990,
  oldPrice: 5490,
  image: "/termit1.jpg",
};

const formatPrice = (value: number) =>
  new Intl.NumberFormat("ru-RU").format(value) + " ₽";

export default function ProductCard() {
  const [liked, setLiked] = useState(false);

  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  const productHref = `/product/${product.id}`;

  return (
    <Card className="group relative w-full gap-0 overflow-hidden rounded-xl border bg-card p-0 shadow-sm transition-all duration-300 sm:rounded-2xl sm:hover:-translate-y-1 sm:hover:shadow-xl">
      <div className="relative aspect-square overflow-hidden bg-muted">
        <Link href={productHref} aria-label={`${product.productBrand} ${product.productModel}`}>
          <Image
            src={product.image}
            alt={`${product.productBrand} ${product.productModel}`}
            fill
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 256px"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {discount > 0 && (
          <Badge className="pointer-events-none absolute left-2 top-2 bg-red-500 px-1.5 py-0 text-[11px] text-white hover:bg-red-500 sm:left-3 sm:top-3 sm:text-xs">
            -{discount}%
          </Badge>
        )}

        <button
          type="button"
          onClick={() => setLiked((prev) => !prev)}
          aria-label="Добавить в избранное"
          className="absolute right-2 top-2 z-10 flex size-8 items-center justify-center rounded-full bg-white/90 shadow backdrop-blur transition active:scale-95 sm:right-3 sm:top-3 sm:size-9"
        >
          <Heart
            className={cn(
              "size-4 transition-colors sm:size-5",
              liked ? "fill-red-500 text-red-500" : "text-gray-600",
            )}
          />
        </button>
      </div>

      <CardContent className="space-y-1.5 p-2.5 sm:space-y-2 sm:p-4">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground sm:text-xs">
          {product.productBrand}
        </p>

        <h3 className="line-clamp-2 min-h-[2.5em] text-xs font-medium leading-snug sm:text-sm">
          <Link href={productHref}>
            {product.productType} {product.productModel}
          </Link>
        </h3>

        <div className="flex flex-wrap items-baseline gap-x-2">
          <span className="text-base font-bold sm:text-lg">
            {formatPrice(product.price)}
          </span>
          {product.oldPrice && (
            <span className="text-xs text-muted-foreground line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>

        <Button
          type="button"
          size="sm"
          onClick={() => {}}
          className="relative z-10 w-full gap-1.5 rounded-lg text-xs sm:rounded-xl sm:text-sm"
        >
          <ShoppingBag className="size-3.5 sm:size-4" />В корзину
        </Button>
      </CardContent>
    </Card>
  );
}