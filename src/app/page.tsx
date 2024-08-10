import ProductList from "@/components/ProductList";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <ProductList />
      </div>
    </>
  );
}
