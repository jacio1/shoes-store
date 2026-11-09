"use client";

import { useState } from "react";
import { Heart, Minus, Plus, ShoppingBag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ProductGallery } from "@/components/ProductGallery";
import { cn } from "@/lib/utils";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/formatPrice";

export function ProductPageClient({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);
  const [size, setSize] = useState<number | null>(
    product.sizes?.length === 1 ? product.sizes[0] : null,
  );
  const [quantity, setQuantity] = useState(1);

  const images = product.images?.length ? product.images : [product.image];
  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : 0;

  const canAdd = !product.sizes?.length || size !== null;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
        {/* Галерея */}
        <ProductGallery
          images={images}
          alt={`${product.productBrand} ${product.productModel}`}
        />

        {/* Информация */}
        <div className="space-y-4 sm:space-y-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                {product.productBrand}
              </p>
              <h1 className="mt-1 text-lg font-semibold leading-snug sm:text-2xl">
                {product.productType} {product.productModel}
              </h1>
            </div>

            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => setLiked((v) => !v)}
              aria-label={
                liked ? "Убрать из избранного" : "Добавить в избранное"
              }
              className="shrink-0"
            >
              <Heart
                className={cn(
                  "size-5 transition-colors",
                  liked ? "fill-red-500 text-red-500" : "text-muted-foreground",
                )}
              />
            </Button>
          </div>

          {/* Цена */}
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="text-2xl font-bold sm:text-3xl">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <>
                <span className="text-sm text-muted-foreground line-through sm:text-base">
                  {formatPrice(product.oldPrice)}
                </span>
                {discount > 0 && (
                  <Badge className="bg-red-500 text-white hover:bg-red-500">
                    -{discount}%
                  </Badge>
                )}
              </>
            )}
          </div>

          {/* Описание */}
          {product.description && (
            <p className="text-sm text-muted-foreground">
              {product.description}
            </p>
          )}

          {/* Размеры */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm font-medium">Размер</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSize(s)}
                    aria-pressed={size === s}
                    className={cn(
                      "min-w-11 rounded-lg border px-3 py-2 text-sm font-medium transition",
                      size === s
                        ? "border-primary bg-primary text-primary-foreground"
                        : "hover:border-foreground/40",
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Количество + кнопка */}
          <div className="flex">
            <Button
              type="button"
              disabled={!canAdd}
              onClick={() => {
                // TODO: добавить в корзину
                console.log({ id: product.id, size, quantity });
              }}
              className="flex-1 gap-2"
            >
              <ShoppingBag className="size-4" />
              {canAdd ? "В корзину" : "Выберите размер"}
            </Button>
          </div>

          {/* Характеристики */}
          {product.specs && product.specs.length > 0 && (
            <div className="rounded-xl border bg-card p-4 sm:rounded-2xl">
              <h2 className="mb-3 text-sm font-semibold sm:text-base">
                Характеристики
              </h2>
              <dl className="space-y-2 text-sm">
                {product.specs.map((s) => (
                  <div
                    key={s.label}
                    className="flex justify-between gap-4 border-b pb-2 last:border-0 last:pb-0"
                  >
                    <dt className="text-muted-foreground">{s.label}</dt>
                    <dd className="text-right font-medium">{s.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
