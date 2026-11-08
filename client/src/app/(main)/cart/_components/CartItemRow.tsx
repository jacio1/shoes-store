"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem } from "@/hooks/useCart";
import { formatPrice } from "@/lib/formatPrice";

type Props = {
  item: CartItem;
  onQuantityChange: (id: number, quantity: number) => void;
  onRemove: (id: number) => void;
};

export function CartItemRow({ item, onQuantityChange, onRemove }: Props) {
  const href = `/product/${item.id}`;

  return (
    <div className="flex gap-3 border-b py-4 sm:gap-4">
      <Link
        href={href}
        className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-muted sm:size-24"
      >
        <Image
          src={item.image}
          alt={`${item.productBrand} ${item.productModel}`}
          fill
          sizes="96px"
          className="object-cover"
        />
      </Link>

      <div className="flex min-w-0 flex-1 flex-col justify-between gap-2">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground sm:text-xs">
              {item.productBrand}
            </p>
            <h3 className="line-clamp-2 text-xs font-medium leading-snug sm:text-sm">
              <Link href={href} className="hover:underline">
                {item.productType} {item.productModel}
              </Link>
            </h3>
          </div>

          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={() => onRemove(item.id)}
            aria-label="Удалить из корзины"
            className="size-8 shrink-0 text-muted-foreground hover:text-destructive"
          >
            <Trash2 className="size-4" />
          </Button>
        </div>

        <div className="flex items-center justify-between gap-2">
          {/* Счётчик количества */}
          <div className="flex items-center rounded-lg border">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => onQuantityChange(item.id, item.quantity - 1)}
              aria-label="Уменьшить количество"
              className="size-8 rounded-r-none"
            >
              <Minus className="size-3.5" />
            </Button>
            <span className="min-w-8 text-center text-sm font-medium">
              {item.quantity}
            </span>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={() => onQuantityChange(item.id, item.quantity + 1)}
              aria-label="Увеличить количество"
              className="size-8 rounded-l-none"
            >
              <Plus className="size-3.5" />
            </Button>
          </div>

          <div className="text-right">
            <p className="text-sm font-bold sm:text-base">
              {formatPrice(item.price * item.quantity)}
            </p>
            {item.quantity > 1 && (
              <p className="text-[11px] text-muted-foreground">
                {formatPrice(item.price)} × {item.quantity}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}