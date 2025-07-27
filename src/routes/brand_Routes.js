import { getAllBrandsController,getBrandByIdController,createBrandController,updateBrandController,deleteBrandController } from "../controller/brand_Controller.js";
import express from "express";

const router = express.Router();

router.get("/", getAllBrandsController);
router.get("/:id", getBrandByIdController);
router.post("/", createBrandController);
router.put("/:id", updateBrandController);
router.delete("/:id", deleteBrandController);

export default router;