import {
  getAllItemCartsController,
  getItemCartByIdController,
  getItemCartsByShoppingCartIdController,
  createItemCartController,
  updateItemCartController,
  deleteItemCartController,
  deleteItemCartByCartAndProductController
} from "../controller/item_Cart_Controller.js";
import express from "express";

const router = express.Router();

router.get("/", getAllItemCartsController);
router.get("/:id", getItemCartByIdController);
router.get("/cart/:shoppingCartId", getItemCartsByShoppingCartIdController);
router.post("/", createItemCartController);
router.put("/:id", updateItemCartController);
router.delete("/:id", deleteItemCartController);
router.delete("/cart/:shoppingCartId/product/:productVariantId", deleteItemCartByCartAndProductController);

export default router;