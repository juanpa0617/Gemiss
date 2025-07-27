import {
  getAllProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController,
  changeStatusProductController,
} from "../controller/product_Controller.js";
import express from "express";

const router = express.Router();

router.get("/", getAllProductsController);
router.get("/:id", getProductByIdController);
router.post("/", createProductController);
router.put("/:id", updateProductController);
router.delete("/:id", deleteProductController);
router.patch("/:id/status", changeStatusProductController);

export default router;
