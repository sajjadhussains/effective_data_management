import { z } from "zod";

const variantSchema = z.object({
  type: z.string().trim().max(30, "Maximum 30 Characters can have"),
  value: z.string().trim().max(30, "Maximum 30 Characters can have"),
});

const inventorySchema = z.object({
  quantity: z
    .number()
    .nonnegative("Quantity must be a non-negative number")
    .int("Quantity must be an integer"),
  inStock: z.boolean(),
});

const ProductValidationSchema = z.object({
  name: z.string().trim().max(25, "Maximum 25 Characters can have"),
  description: z.string().trim().max(200, "Maximum 200 Characters Can Have"),
  price: z.number().nonnegative("Price must be a non-negative number"),
  category: z.string().trim().max(25, "Maximum 25 Characters Can Have"),
  tags: z.array(z.string()).nonempty("Product tags are required"),
  variants: z.array(variantSchema).nonempty("Product variants are required"),
  inventory: inventorySchema,
});

export default ProductValidationSchema;
