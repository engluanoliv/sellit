import { db } from "@/db/connection";
import { Product, productsTable } from "@/db/schema";
import { getProductDetails } from "@/http/get-product-details";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  context: { params: { id: string } }
) => {
  return getProductDetails(req, context);
};
