import { db } from "@/db/connection";
import { eq } from "drizzle-orm";
import { Product } from "@/types/product";
import { productsTable } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";

export const getProductDetails = async (
  req: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> => {
  try {
    const products: Product[] = await db
      .select()
      .from(productsTable)
      .where(eq(productsTable.id, params.id));

    if (!products.length) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    const product = products[0];
    return NextResponse.json(product);
  } catch (error) {
    console.log("Error while fetching product - ", error);
    return NextResponse.json(
      { error: "Failed to found the product" },
      { status: 500 }
    );
  }
};
