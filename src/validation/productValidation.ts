import { Product } from "@/types/product";
import { NextResponse } from "next/server";

export function validateProductData(product: Product) {
  const {
    name,
    description,
    producer_name,
    producer_email,
    cover,
    thumbnail,
    price,
  } = product;

  if (
    !name ||
    !description ||
    !producer_name ||
    !producer_email ||
    !cover ||
    !thumbnail ||
    typeof price !== "number"
  ) {
    return NextResponse.json(
      { error: "Missingor invalid required fields" },
      { status: 400 }
    );
  }
}
