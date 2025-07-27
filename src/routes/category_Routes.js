import { getAllCategoryController, getCategoryByIdController, createCategoryController, updateCategoryController, deleteCategoryController } from "../controller/category_Controller.js";
import express from "express";


const router = express.Router();

router.get("/", getAllCategoryController);
router.get("/:id", getCategoryByIdController);
router.post("/", createCategoryController);
router.put("/:id", updateCategoryController);
router.delete("/:id", deleteCategoryController);

export default router;