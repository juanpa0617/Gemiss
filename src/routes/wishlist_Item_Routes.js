import {
  getAllWishlistItemsController,
  getWishlistItemByIdController,
  getWishlistItemsByUserIdController,
  createWishlistItemController,
  deleteWishlistItemController,
  deleteWishlistItemByUserAndProductController,
  checkIfItemInWishlistController,
  toggleWishlistItemController
} from "../controller/wishlist_Item_Controller.js";
import express from "express";

const router = express.Router();

router.get("/", getAllWishlistItemsController);
router.get("/:id", getWishlistItemByIdController);
router.get("/user/:userId", getWishlistItemsByUserIdController);
router.get("/check/:userId/:productVariantId", checkIfItemInWishlistController);
router.post("/", createWishlistItemController);
router.post("/toggle", toggleWishlistItemController);
router.delete("/:id", deleteWishlistItemController);
router.delete("/user/:userId/product/:productVariantId", deleteWishlistItemByUserAndProductController);

export default router;