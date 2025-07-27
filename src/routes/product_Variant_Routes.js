import {
  getAllProductVariantsController,
  getProductVariantByIdController,
  getProductVariantsByProductIdController,
  createProductVariantController,
  updateProductVariantController,
  deleteProductVariantController,
  changeStatusProductVariantController
} from "../controller/product_Variant_Controller.js";
import express from "express";

const router = express.Router();

router.get("/", getAllProductVariantsController);
router.get("/:id", getProductVariantByIdController);
router.get("/product/:productId", getProductVariantsByProductIdController);
router.post("/", createProductVariantController);
router.put("/:id", updateProductVariantController);
router.delete("/:id", deleteProductVariantController);
router.patch("/:id/status", changeStatusProductVariantController);

export default router;
