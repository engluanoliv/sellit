import {
  pgTable,
  text,
  varchar,
  timestamp,
  numeric,
} from "drizzle-orm/pg-core";

export const productsTable = pgTable("products", {
  id: varchar("id", { length: 26 }).primaryKey(),
  category_id: varchar("category_id", { length: 26 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description").notNull(),
  producer_name: varchar("producer_name", { length: 255 }).notNull(),
  producer_email: varchar("producer_email", { length: 255 }).notNull(),
  cover: varchar("cover", { length: 255 }).notNull(),
  thumbnail: varchar("thumbnail", { length: 255 }).notNull(),
  price: numeric("price", { precision: 10, scale: 2 }).notNull(),
  updated_at: timestamp("updated_at").defaultNow().notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
});
