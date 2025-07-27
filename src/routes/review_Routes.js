import {
  getAllReviewsController,
  getReviewByIdController,
  getReviewsByProductIdController,
  getReviewsByUserIdController,
  createReviewController,
  updateReviewController,
  deleteReviewController,
  approveReviewController,
  rejectReviewController
} from "../controller/review_Controller.js";
import express from "express";

const router = express.Router();

router.get("/", getAllReviewsController);
router.get("/:id", getReviewByIdController);
router.get("/product/:productId", getReviewsByProductIdController);
router.get("/user/:userId", getReviewsByUserIdController);
router.post("/", createReviewController);
router.put("/:id", updateReviewController);
router.delete("/:id", deleteReviewController);
router.patch("/:id/approve", approveReviewController);
router.patch("/:id/reject", rejectReviewController);

export default router;