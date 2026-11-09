export type Product = {
  id: number;
  productType: string;
  productBrand: string;
  productModel: string;
  price: number;
  oldPrice?: number;
  image: string;
  images?: string[];
  sizes?: number[];
  description?: string;
  specs?: { label: string; value: string }[];
};