import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderIntoDb = async (orderData: TOrder) => {
  const result = await OrderModel.create(orderData);
  return result;
};

const getAllOrdersFromDb = async (email: string, is_true: boolean) => {
  let result;
  if (is_true) {
    result = await OrderModel.find({ email });
  } else {
    result = await OrderModel.find();
  }
  return result;
};
export const OrderServices = {
  createOrderIntoDb,
  getAllOrdersFromDb,
};
