import Image from "next/image";
import { Product } from "@/types/product";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <>
      <li className="flex flex-col text-center items-center justify-center pt-5 pb-5 border border-1 mb-3">
        <Image
          className="border border-1 p-3"
          width={100}
          height={100}
          src={product.thumbnail}
          alt={product.name}
        />
        <h1 className="py-4 underline font-medium text-lg text-blue-500">
          {product.name}
        </h1>
        <p className="py-1 font-extralight text-sm">{product.description}</p>
        <p className="py-1 font-extralight text-sm">
          Produced by: {product.producer_name}
        </p>
        <p className="py-1 font-extralight text-sm underline">
          USD {product.price}
        </p>
      </li>
    </>
  );
}
