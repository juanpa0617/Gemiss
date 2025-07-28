import {
  getAllProductsController,
  getProductByIdController,
  createProductController,
  updateProductController,
  deleteProductController,
  changeStatusProductController,
} from "../controller/product_Controller.js";
import express from "express";
import { authenticateToken } from "../middlewares/auth.js";

const router = express.Router();
//rutas publicas
router.get("/", getAllProductsController);
router.get("/:id", getProductByIdController);

//rutas protegidas 
router.post("/",authenticateToken, createProductController);
router.put("/:id",authenticateToken, updateProductController);
router.delete("/:id",authenticateToken, deleteProductController);
router.patch("/:id/status", authenticateToken,changeStatusProductController);

export default router;
