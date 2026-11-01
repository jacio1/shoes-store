import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-2 gap-2 p-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      {Array.from({ length: 10 }, (_, i) => (
        <ProductCard key={i} />
      ))}
    </div>
  );
}
