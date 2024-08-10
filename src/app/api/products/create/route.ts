import { NextRequest } from "next/server";
import { createProducts } from "@/http/create-product";

export const POST = async (req: NextRequest) => {
  return createProducts(req);
};
