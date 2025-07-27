import {
  getAllAttributesController,
  getAttributeByIdController,
  createAttributeController,
  updateAttributeController,
  deleteAttributeController
} from "../controller/attribute_Controller.js";
import express from "express";

const router = express.Router();

router.get("/", getAllAttributesController);
router.get("/:id", getAttributeByIdController);
router.post("/", createAttributeController);
router.put("/:id", updateAttributeController);
router.delete("/:id", deleteAttributeController);

export default router;