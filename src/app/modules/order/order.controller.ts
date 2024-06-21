import { Request, Response } from "express";
import orderValidationSchema from "./order.validation";
import { OrderServices } from "./order.services";

const createOrder = async (req: Request, res: Response) => {
  try {
    const zodParsedData = orderValidationSchema.parse(req.body);
    await OrderServices.checkAndUpdateInventory(
      zodParsedData.productId,
      zodParsedData.quantity
    );
    const result = await OrderServices.createOrderIntoDb(zodParsedData);
    res.status(200).json({
      success: true,
      message: "Orders Created Successfully",
      data: result,
    });
  } catch (err: any) {
    res.status(200).json({
      success: false,
      message: err,
    });
  }
};

const getAllOrders = async (req: Request, res: Response) => {
  try {
    const { email } = req.query;
    console.log(email);
    let is_true: boolean = false;
    let orders;
    if (email) {
      is_true = true;
      orders = await OrderServices.getAllOrdersFromDb(email, is_true);
      res.status(200).json({
        success: true,
        message: "email fetch successfully",
        data: orders,
      });
    } else {
      orders = await OrderServices.getAllOrdersFromDb(email, is_true);
      res.status(200).json({
        success: true,
        message: "Orders fetched successfully!",
        data: orders,
      });
    }
  } catch (err) {
    console.log(err);
  }
};

export const OrderController = {
  createOrder,
  getAllOrders,
};
