import { Schema, model } from "mongoose";
import { TOrder } from "./order.interface";
import validator from "validator";

const orderSchema = new Schema<TOrder>({
  email: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: "{VALUE} can't be an email",
    },
  },
  productId: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

export const OrderModel = model<TOrder>("Order", orderSchema);
