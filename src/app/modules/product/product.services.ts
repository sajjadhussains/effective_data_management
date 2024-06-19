import { Product } from "./product.interface";
import { ProductModel } from "./product.model";

const createProductIntoDb = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getAllProductsFromDb = async () => {
  const result = await ProductModel.find();
  return result;
};

const getSingleProductFromDb = async (_id: string) => {
  const result = await ProductModel.findOne({ _id });
  return result;
};

const updateProductIntoDb = async (_id: string, product: Product) => {
  const result = await ProductModel.findByIdAndUpdate(_id, product, {
    new: true,
  });
  return result;
};
export const ProductServices = {
  createProductIntoDb,
  getAllProductsFromDb,
  getSingleProductFromDb,
  updateProductIntoDb,
};
