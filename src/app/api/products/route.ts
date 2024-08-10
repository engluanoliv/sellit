import { getProducts } from "@/http/get-products";

export const GET = async () => {
  return getProducts();
};
