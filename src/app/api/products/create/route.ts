import { createProducts } from "@/http/create-product";
import { NextRequest } from "next/server";

export const POST = async (req: NextRequest) => {
  return createProducts(req);
};
