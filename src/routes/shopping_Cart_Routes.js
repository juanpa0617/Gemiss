import {
  getAllShoppingCartsController,
  getShoppingCartByIdController,
  getShoppingCartByUserIdController,
  createShoppingCartController,
  updateShoppingCartController,
  deleteShoppingCartController
} from "../controller/shopping_Cart_Controller.js";
import express from "express";

const router = express.Router();

router.get("/", getAllShoppingCartsController);
router.get("/:id", getShoppingCartByIdController);
router.get("/user/:userId", getShoppingCartByUserIdController);
router.post("/", createShoppingCartController);
router.put("/:id", updateShoppingCartController);
router.delete("/:id", deleteShoppingCartController);

export default router;