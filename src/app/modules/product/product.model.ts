import { Schema, model } from "mongoose";
import { Inventory, Product, Variant } from "./product.interface";

const variantSchema = new Schema<Variant>({
  type: String,
  value: String,
});
const inventorySchema = new Schema<Inventory>({
  quantity: Number,
  inStock: Boolean,
});
const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    required: true,
  },
  variants: {
    type: [variantSchema],
    required: true,
  },
  inventory: {
    type: inventorySchema,
    required: true,
  },
});

export const ProductModel = model<Product>("Product", productSchema);
