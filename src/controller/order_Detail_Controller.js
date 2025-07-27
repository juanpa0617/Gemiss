import {
  getAllOrderDetailsService,
  getOrderDetailByIdService,
  getOrderDetailsByOrderIdService,
  createOrderDetailService,
  updateOrderDetailService,
  deleteOrderDetailService,
} from "../services/order_Detail_Services.js";
import { validationResult } from "express-validator";

export const getAllOrderDetailsController = async (req, res) => {
  try {
    const result = await getAllOrderDetailsService();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOrderDetailByIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getOrderDetailByIdService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOrderDetailsByOrderIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getOrderDetailsByOrderIdService(req.params.orderId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createOrderDetailController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await createOrderDetailService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateOrderDetailController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await updateOrderDetailService(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteOrderDetailController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await deleteOrderDetailService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};