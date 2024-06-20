import { Request, Response } from "express";
import { ProductServices } from "./product.services";
import ProductValidationSchema from "./product.validation";
import { ProductModel } from "./product.model";

const createNewProduct = async (req: Request, res: Response) => {
  try {
    const zodParsedData = ProductValidationSchema.parse(req.body);
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
    const { searchTerm } = req.query;
    let result;
    if (searchTerm) {
      result = await ProductModel.find({
        $or: [
          { name: { $regex: searchTerm, $options: "i" } },
          { description: { $regex: searchTerm, $options: "i" } },
        ],
      });
      res.status(200).json({
        success: true,
        message: `Products matching search term '${searchTerm}' fetched successfully!`,
        data: result,
      });
    } else {
      result = await ProductServices.getAllProductsFromDb();
      res.status(200).json({
        success: true,
        message: "Products fetched successfully!",
        data: result,
      });
    }
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
    const result = await ProductServices.updateProductIntoDb(
      productId,
      req.body
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

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.deleteProductFromDb(productId);
    if (!result) {
      res.status(404).json({
        success: false,
        message: "Product Not Found",
        data: result,
      });
    }
    res.status(200).json({
      success: true,
      message: "Product Deleted Successfully",
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
  deleteProduct,
};
