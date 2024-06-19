import { Schema, model } from "mongoose";
import { Inventory, Product, Variant } from "./product.interface";

const variantSchema = new Schema<Variant>({
  type: {
    type: String,
    required: [true, "Variant type is required"],
    trim: true,
    maxlength: [30, "Maximum 30 Characters can have"],
  },
  value: {
    type: String,
    required: [true, "Value of Variant type is required"],
    trim: true,
    maxlength: [30, "Maximum 30 Characters can have"],
  },
});

const inventorySchema = new Schema<Inventory>({
  quantity: {
    type: Number,
    required: [true, "Quantity is required"],
  },
  inStock: {
    type: Boolean,
    required: [true, "In-stock status is required"],
  },
});

const productSchema = new Schema<Product>({
  name: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
    maxlength: [25, "Maximum 25 Characters can have"],
  },
  description: {
    type: String,
    required: [true, "Product description is required"],
    trim: true,
    maxlength: [200, "Maximum 200 Characters Can Have"],
  },
  price: {
    type: Number,
    required: [true, "Product price is required"],
  },
  category: {
    type: String,
    required: [true, "Product category is required"],
    trim: true,
    maxlength: [25, "Maximum 25 Characters Can Have"],
  },
  tags: {
    type: [String],
    required: [true, "Product tags are required"],
  },
  variants: {
    type: [variantSchema],
    required: [true, "Product variants are required"],
  },
  inventory: {
    type: inventorySchema,
    required: [true, "Product inventory is required"],
  },
});

export const ProductModel = model<Product>("Product", productSchema);
