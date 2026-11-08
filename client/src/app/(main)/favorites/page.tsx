"use client";

import ProductCard from "@/components/ProductCard";
import { plural } from "@/lib/plural";
import EmptyFavorites from "./_components/EmptyFavorites";
import { useFavorites } from "@/hooks/useFavorites";
import { ProductGridSkeleton } from "@/components/ProductGridSkeleton";

export default function FavoritesPage() {
  const { favorites, isLoading, count } = useFavorites();

  if (isLoading) {
    return (
      <div className="mx-auto w-full max-w-6xl px-4 py-6">
        <ProductGridSkeleton count={8} />
      </div>
    );
  }

  if (count === 0) {
    return <EmptyFavorites />;
  }

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-6">
      <div className="mb-5 flex items-baseline justify-between gap-3">
        <h1 className="text-xl font-semibold sm:text-2xl">Избранное</h1>
        <span className="text-sm text-muted-foreground">
          {count} {plural(count, ["товар", "товара", "товаров"])}
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {favorites.map((product) => (
          <ProductCard key={product.id} />
        ))}
      </div>
    </div>
  );
}
