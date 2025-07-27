import {
  getAllProductAttributeValuesController,
  getProductAttributeValuesByProductIdController,
  getProductAttributeValuesByVariantIdController,
  createProductAttributeValueController,
  deleteProductAttributeValueController
} from "../controller/product_Attribute_Value_Controller.js";
import express from "express";

const router = express.Router();

router.get("/", getAllProductAttributeValuesController);
router.get("/product/:productId", getProductAttributeValuesByProductIdController);
router.get("/variant/:variantId", getProductAttributeValuesByVariantIdController);
router.post("/", createProductAttributeValueController);
router.delete("/product/:productId/variant/:productVariantId/attribute/:attributeValueId", deleteProductAttributeValueController);

export default router;