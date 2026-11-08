"use client";

import { useMemo, useState } from "react";

type Product = {
  id: number
  productType: string
  productBrand:  string
  productModel: string
  price: number
  oldPrice?: number
  image: string
};

export type CartItem = Product & { quantity: number };

const MOCK: CartItem[] = [
  {
    id: 1,
    productType: "Кроссовки утеплённые женские",
    productBrand: "Termit",
    productModel: "Sp Surfer Puff",
    price: 3990,
    oldPrice: 5490,
    image: "/termit1.jpg",
    quantity: 1,
  },
  {
    id: 2,
    productType: "Ботинки мужские",
    productBrand: "Termit",
    productModel: "Trail Pro",
    price: 4590,
    image: "/termit2.jpg",
    quantity: 2,
  },
];

export function useCart() {
  // TODO: заменить на реальный стор (Zustand / Context)
  const [items, setItems] = useState<CartItem[]>(MOCK);

  const updateQuantity = (id: number, quantity: number) => {
    if (quantity < 1) return removeItem(id);
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, quantity } : i)));
  };

  const removeItem = (id: number) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const { total, count } = useMemo(() => {
    return items.reduce(
      (acc, i) => {
        acc.total += i.price * i.quantity;
        acc.count += i.quantity;
        return acc;
      },
      { total: 0, count: 0 },
    );
  }, [items]);

  return {
    items,
    isLoading: false,
    count,
    total,
    updateQuantity,
    removeItem,
  };
}
