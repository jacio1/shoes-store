"use client";

import { useMemo, useState } from "react";

export type FavoriteProduct = {
  id: number;
  productType: string;
  productBrand: string;
  productModel: string;
  price: number;
  oldPrice?: number;
  image: string;
};

// Временные данные — замените на выборку из стора/API
const MOCK: FavoriteProduct[] = [
  {
    id: 1,
    productType: "Кроссовки утеплённые женские",
    productBrand: "Termit",
    productModel: "Sp Surfer Puff",
    price: 3990,
    oldPrice: 5490,
    image: "/termit1.jpg",
  },
  {
    id: 2,
    productType: "Ботинки мужские",
    productBrand: "Termit",
    productModel: "Trail Pro",
    price: 4590,
    image: "/termit2.jpg",
  },
];

export function useFavorites() {
  // TODO: заменить на реальный источник (Zustand / Context / react-query)
  const [favorites] = useState<FavoriteProduct[]>(MOCK);

  const count = favorites.length;

  return useMemo(() => ({ favorites, count, isLoading: false }), [favorites, count]);
}