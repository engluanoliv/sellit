import { db } from "@/db/connection";
import { Product } from "@/types/product";
import { generateUlid } from "@/utils/ulid";
import { productsTable } from "@/db/schema";
import { validateProductData } from "@/validation/productValidation";
import { NextRequest, NextResponse } from "next/server";

export const createProducts = async (
  req: NextRequest
): Promise<NextResponse> => {
  try {
    // parse and validate the product data
    const newProduct: Product = await req.json();

    const validationError = validateProductData(newProduct);
    if (validationError) return validationError;

    // desctructure product data
    const {
      name,
      description,
      producer_name,
      producer_email,
      cover,
      thumbnail,
      price,
      updated_at,
      created_at,
    } = newProduct;

    // insert product into database
    await db.insert(productsTable).values({
      id: generateUlid(),
      category_id: generateUlid(),
      name,
      description,
      producer_name,
      producer_email,
      cover,
      thumbnail,
      price,
      updated_at: updated_at ? new Date(updated_at) : undefined,
      created_at: created_at ? new Date(created_at) : undefined,
    });

    return NextResponse.json(
      { message: "Product created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Failed to create a new product" },
      { status: 500 }
    );
  }
};
