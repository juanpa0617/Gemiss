import {
  getAllOrderDetailsController,
  getOrderDetailByIdController,
  getOrderDetailsByOrderIdController,
  createOrderDetailController,
  updateOrderDetailController,
  deleteOrderDetailController
} from "../controller/order_Detail_Controller.js";
import express from "express";

const router = express.Router();

router.get("/", getAllOrderDetailsController);
router.get("/:id", getOrderDetailByIdController);
router.get("/order/:orderId", getOrderDetailsByOrderIdController);
router.post("/", createOrderDetailController);
router.put("/:id", updateOrderDetailController);
router.delete("/:id", deleteOrderDetailController);

export default router;