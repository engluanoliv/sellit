import { Product } from "@/types/product";
import { NextResponse } from "next/server";

export function isString(value: any): value is string {
  return typeof value === "string" && value.trim() !== "";
}

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
    !isString(name) ||
    !isString(description) ||
    !isString(producer_name) ||
    !isString(producer_email) ||
    !isString(cover) ||
    !isString(thumbnail) ||
    typeof price !== "number"
  ) {
    return NextResponse.json(
      { error: "Missing or invalid required fields" },
      { status: 400 }
    );
  }
}
