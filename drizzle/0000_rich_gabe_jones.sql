CREATE TABLE IF NOT EXISTS "products" (
	"id" varchar(26) PRIMARY KEY NOT NULL,
	"category_id" varchar(26) NOT NULL,
	"name" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"producer_name" varchar(255) NOT NULL,
	"producer_email" varchar(255) NOT NULL,
	"cover" varchar(255) NOT NULL,
	"thumbnail" varchar(255) NOT NULL,
	"price" numeric(10, 2) NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
