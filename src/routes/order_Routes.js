import {
  getAllOrdersController,
  getOrderByIdController,
  getOrdersByUserIdController,
  createOrderController,
  updateOrderController,
  updateOrderStatusController,
  deleteOrderController
} from "../controller/order_Controller.js";
import express from "express";

const router = express.Router();

router.get("/", getAllOrdersController);
router.get("/:id", getOrderByIdController);
router.get("/user/:userId", getOrdersByUserIdController);
router.post("/", createOrderController);
router.put("/:id", updateOrderController);
router.patch("/:id/status", updateOrderStatusController);
router.delete("/:id", deleteOrderController);

export default router;