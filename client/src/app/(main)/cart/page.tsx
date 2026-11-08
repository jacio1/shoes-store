"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartSkeleton } from "@/components/CartSkeleton";
import { plural } from "@/lib/plural";
import { useCart } from "@/hooks/useCart";
import { CartItemRow } from "./_components/CartItemRow";
import { formatPrice } from "@/lib/formatPrice";

export default function CartPage() {
  const { items, isLoading, count, total, updateQuantity, removeItem } =
    useCart();

  if (isLoading) {
    return (
      <div className="mx-auto w-full max-w-4xl px-4 py-6">
        <CartSkeleton count={3} />
      </div>
    );
  }

  if (items.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-6">
      <div className="mb-5 flex items-baseline justify-between gap-3">
        <h1 className="text-xl font-semibold sm:text-2xl">Корзина</h1>
        <span className="text-sm text-muted-foreground">
          {count} {plural(count, ["товар", "товара", "товаров"])}
        </span>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Список */}
        <div>
          {items.map((item) => (
            <CartItemRow
              key={item.id}
              item={item}
              onQuantityChange={updateQuantity}
              onRemove={removeItem}
            />
          ))}
        </div>

        {/* Итого */}
        <aside className="h-fit rounded-xl border bg-card p-4 shadow-sm sm:rounded-2xl sm:p-5 lg:sticky lg:top-20">
          <h2 className="mb-3 text-base font-semibold sm:text-lg">Итого</h2>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Товары ({count})</span>
              <span>{formatPrice(total)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Доставка</span>
              <span className="text-green-600">Бесплатно</span>
            </div>
          </div>

          <div className="my-3 border-t" />

          <div className="mb-4 flex justify-between text-base font-bold sm:text-lg">
            <span>К оплате</span>
            <span>{formatPrice(total)}</span>
          </div>

          <Button size="lg" className="w-full">
            Перейти к оформлению
          </Button>
        </aside>
      </div>
    </div>
  );
}

function EmptyCart() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4 px-4 text-center">
      <div className="flex size-16 items-center justify-center rounded-full bg-muted">
        <ShoppingCart className="size-8 text-muted-foreground" />
      </div>
      <div className="space-y-1.5">
        <h2 className="text-lg font-semibold sm:text-xl">Корзина пуста</h2>
        <p className="max-w-sm text-sm text-muted-foreground">
          Добавьте товары из каталога — они появятся здесь, и вы сможете
          оформить заказ.
        </p>
      </div>
      <Button  size="lg" className="sm:w-auto">
        <Link href="/catalog">Перейти в каталог</Link>
      </Button>
    </div>
  );
}