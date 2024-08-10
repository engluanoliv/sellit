import { db } from "@/db/connection";
import { Product, productsTable } from "@/db/schema";
import { NextResponse } from "next/server";

export const getProducts = async (): Promise<NextResponse> => {
  try {
    const products: Product[] = await db.select().from(productsTable);
    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.json(
      { error: "Error while catching the products" },
      { status: 500 }
    );
  }
};
