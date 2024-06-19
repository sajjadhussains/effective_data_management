import express from "express";
import { productControllers } from "./product.controller";

const router = express.Router();

router.post("", productControllers.createNewProduct);
router.get("", productControllers.getAllProducts);
router.get("/:productId", productControllers.getSingleProduct);
router.put("/:productId", productControllers.updateProduct);

export const ProductRoutes = router;
