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
    // parse the product data
    const data = await req.json();

    // check if is only one product or an array of products
    const products: Product[] = Array.isArray(data) ? data : [data];

    //validate each product
    for (const product of products) {
      const validationError = validateProductData(product);
      if (validationError) return validationError;
    }

    // desctructure product for insertion
    const productValues = products.map((product) => ({
      id: generateUlid(),
      category_id: generateUlid(),
      name: product.name,
      description: product.description,
      producer_name: product.producer_name,
      producer_email: product.producer_email,
      cover: product.cover,
      thumbnail: product.thumbnail,
      price: product.price,
      updated_at: product.updated_at ? new Date(product.updated_at) : undefined,
      created_at: product.created_at ? new Date(product.created_at) : undefined,
    }));

    // insert product into database
    await db.insert(productsTable).values(productValues);

    return NextResponse.json(
      { message: "Product created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error creating product: ", error);

    return NextResponse.json(
      { error: "Failed to create a new product" },
      { status: 500 }
    );
  }
};
