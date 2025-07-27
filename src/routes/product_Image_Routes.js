import {
  getAllProductImagesController,
  getProductImageByIdController,
  getProductImagesByProductIdController,
  createProductImageController,
  updateProductImageController,
  deleteProductImageController,
  setMainImageController
} from "../controller/product_Image_Controller.js";
import express from "express";

const router = express.Router();

router.get("/", getAllProductImagesController);
router.get("/:id", getProductImageByIdController);
router.get("/product/:productId", getProductImagesByProductIdController);
router.post("/", createProductImageController);
router.put("/:id", updateProductImageController);
router.delete("/:id", deleteProductImageController);
router.patch("/product/:productId/main/:imageId", setMainImageController);

export default router;