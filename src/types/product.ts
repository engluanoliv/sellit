import { productsTable } from "@/db/schema";
import { InferSelectModel } from "drizzle-orm";

export type Product = InferSelectModel<typeof productsTable>;
