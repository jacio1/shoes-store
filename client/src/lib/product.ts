import type { Product } from "@/types/product";

const PRODUCTS: Product[] = [
  {
    id: 1,
    productType: "Кроссовки утеплённые женские",
    productBrand: "Termit",
    productModel: "Sp Surfer Puff",
    price: 3990,
    oldPrice: 5490,
    image: "/termit1.jpg",
    images: ["/termit1.jpg", "/termit2.jpg", "/termit3.jpg"],
    sizes: [36, 37, 38, 39, 40],
    description:
      "Тёплые утеплённые кроссовки на зиму. Водоотталкивающая верхняя часть, мягкая подкладка и нескользящая подошва.",
    specs: [
      { label: "Бренд", value: "Termit" },
      { label: "Модель", value: "Sp Surfer Puff" },
      { label: "Сезон", value: "Зима" },
      { label: "Материал", value: "Эко-кожа, текстиль" },
    ],
  },
];

export async function getProduct(id: number): Promise<Product | null> {
  // TODO: заменить на fetch/БД
  return PRODUCTS.find((p) => p.id === id) ?? null;
}