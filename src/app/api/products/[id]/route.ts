import { NextRequest } from "next/server";
import { getProductDetails } from "@/http/get-product-details";

export const GET = async (
  req: NextRequest,
  context: { params: { id: string } }
) => {
  return getProductDetails(req, context);
};
