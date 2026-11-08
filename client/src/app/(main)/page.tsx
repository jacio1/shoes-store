"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { ProductGrid } from "@/components/ProductGrid";
import { ProductGridSkeleton } from "@/components/ProductGridSkeleton";

const product = [
  {
    id: 1,
    productType: "Кроссовки утеплённые женские",
    productBrand: "Termit",
    productModel: "Sp Surfer Puff",
    price: 3990,
    oldPrice: 5490,
    image: "/termit1.jpg",
  },
];
export default function Home() {
  const [product] = useState(Array.from([1, 2, 3, 4, 5, 6, 7, 8]));
  const [isLoading] = useState(false);

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-6">
      <h1 className="mb-5 text-xl font-semibold sm:text-2xl">Популярное</h1>

      {isLoading ? (
        <ProductGridSkeleton count={8} />
      ) : (
        <ProductGrid>
          {product.map((product) => (
            <ProductCard key={product} />
          ))}
        </ProductGrid>
      )}
    </main>
  );
}
