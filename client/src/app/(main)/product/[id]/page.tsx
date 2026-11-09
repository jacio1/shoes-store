import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ProductPageClient } from "./ProductPageClient";
import { getProduct } from "@/lib/product";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(Number(id));
  if (!product) return { title: "Товар не найден" };

  return {
    title: `${product.productType} ${product.productModel} — ${product.productBrand}`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params;
  const product = await getProduct(Number(id));

  if (!product) notFound();

  return <ProductPageClient product={product} />;
}