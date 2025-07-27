import {
  getAllReviewsService,
  getReviewByIdService,
  getReviewsByProductIdService,
  getReviewsByUserIdService,
  createReviewService,
  updateReviewService,
  deleteReviewService,
  approveReviewService,
  rejectReviewService,
} from "../services/review_Services.js";
import { validationResult } from "express-validator";

export const getAllReviewsController = async (req, res) => {
  try {
    const result = await getAllReviewsService();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getReviewByIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getReviewByIdService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getReviewsByProductIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getReviewsByProductIdService(req.params.productId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getReviewsByUserIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getReviewsByUserIdService(req.params.userId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createReviewController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await createReviewService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateReviewController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await updateReviewService(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteReviewController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await deleteReviewService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const approveReviewController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await approveReviewService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const rejectReviewController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await rejectReviewService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};