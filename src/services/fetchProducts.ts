import { Product } from "@/types/product";

export const fetchProducts = async (): Promise<Product[]> => {
  try {
    const response = await fetch("/api/products");
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const productsData: Product[] = await response.json();
    return productsData;
  } catch (error) {
    console.log("Error while fetching products:", error);
    return [];
  }
};
