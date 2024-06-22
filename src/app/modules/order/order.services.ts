import { ProductModel } from "../product/product.model";
import { TOrder } from "./order.interface";
import { OrderModel } from "./order.model";

const createOrderIntoDb = async (orderData: TOrder) => {
  const result = await OrderModel.create(orderData);
  return result;
};

const checkAndUpdateInventory = async (productId: string, quantity: number) => {
  const productData = await ProductModel.findOne({ _id: productId });
  if (!productData) {
    throw new Error("Product not found in inventory");
  }

  if (productData.inventory.quantity < quantity) {
    throw new Error("Insufficient quantity available in inventory");
  }

  productData.inventory.quantity -= quantity;
  if (productData.inventory.quantity <= 0) {
    productData.inventory.inStock = false;
  }
  await productData.save();
};

const getAllOrdersFromDb = async (
  email: string | undefined,
  is_true: boolean
) => {
  let result;
  if (is_true) {
    result = await OrderModel.find({ email });
  } else {
    result = await OrderModel.find();
  }
  // console.log(result);
  if (result.length == 0) {
    throw new Error("Order Not Fount");
  }
  return result;
};
export const OrderServices = {
  createOrderIntoDb,
  getAllOrdersFromDb,
  checkAndUpdateInventory,
};
