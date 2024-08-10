"use client";

import { fetchProducts } from "@/services/fetchProducts";
import ProductItem from "../ProductItem";
import { Product } from "@/types/product";
import { useEffect, useState } from "react";

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(true);

  useEffect(() => {
    const getAllProducts = async () => {
      const fetchedProducts = await fetchProducts();
      setIsFetching(false);
      setProducts(fetchedProducts);
      console.log(fetchedProducts);
    };
    getAllProducts();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="text-xl">Product List</h1>
        {isFetching ? (
          <p className="text-green-900">Fetching products from database...</p>
        ) : (
          <ul className="w-96">
            {products.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
