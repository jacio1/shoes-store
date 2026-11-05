import CatalogCard from "@/components/CatalogCard";

const categories = [
  { title: "Мужчинам", image: "/man.jpg", href: "/catalog/men" },
  { title: "Женщинам", image: "/man.jpg", href: "/catalog/women" },
  { title: "Детям", image: "/man.jpg", href: "/catalog/kids" },
  { title: "Детям", image: "/man.jpg", href: "/catalog/kids1" },
  { title: "Детям", image: "/man.jpg", href: "/catalog/kids1" },
  { title: "Детям", image: "/man.jpg", href: "/catalog/kids1" },
  { title: "Детям", image: "/man.jpg", href: "/catalog/kids1" },
    

];

export default function CatalogGrid() {
  return (
    <div className="grid grid-cols-2 gap-3 p-4 md:grid-cols-4">
      {categories.map((c) => (
        <CatalogCard key={c.href} {...c} />
      ))}
    </div>
  );
}