import { ProductCardSkeleton } from "@/components/ProductCardSkeleton";
import { ProductGrid } from "@/components/ProductGrid";

type ProductGridSkeletonProps = {
  count?: number;
  className?: string;
};

export function ProductGridSkeleton({
  count = 8,
  className,
}: ProductGridSkeletonProps) {
  return (
    <ProductGrid className={className}>
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </ProductGrid>
  );
}