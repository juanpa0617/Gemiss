import {
  getAllAttributeValuesController,
  getAttributeValueByIdController,
  getAttributeValuesByAttributeIdController,
  createAttributeValueController,
  updateAttributeValueController,
  deleteAttributeValueController
} from "../controller/attribute_Value_Controller.js";
import express from "express";

const router = express.Router();

router.get("/", getAllAttributeValuesController);
router.get("/:id", getAttributeValueByIdController);
router.get("/attribute/:attributeId", getAttributeValuesByAttributeIdController);
router.post("/", createAttributeValueController);
router.put("/:id", updateAttributeValueController);
router.delete("/:id", deleteAttributeValueController);

export default router;