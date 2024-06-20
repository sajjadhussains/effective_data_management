import { z } from "zod";

// Define the Zod schema for TOrder
const orderValidationSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  productId: z.string().nonempty({ message: "Product ID is required" }),
  price: z
    .number()
    .nonnegative({ message: "Price must be a non-negative number" }),
  quantity: z
    .number()
    .nonnegative({ message: "Quantity must be a non-negative number" }),
});

// Export the schema to use it in your application
export default orderValidationSchema;
