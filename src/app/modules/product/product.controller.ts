import { Request, Response } from "express";
import { ProductServices } from "./product.services";
import ProductValidationSchema from "./product.validation";

const createNewProduct = async (req: Request, res: Response) => {
  try {
    const { product: productData } = req.body;

    const zodParsedData = ProductValidationSchema.parse(productData);
    const result = await ProductServices.createProductIntoDb(zodParsedData);
    res.status(200).json({
      success: true,
      message: "Product created successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await ProductServices.getAllProductsFromDb();
    res.status(200).json({
      success: true,
      message: "Products fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductFromDb(productId);
    res.status(200).json({
      success: true,
      message: "Product fetched successfully!",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const { product: productData } = req.body;
    const result = await ProductServices.updateProductIntoDb(
      productId,
      productData
    );

    res.status(200).json({
      success: true,
      message: "Product Updated Successfully",
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
export const productControllers = {
  createNewProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
};
