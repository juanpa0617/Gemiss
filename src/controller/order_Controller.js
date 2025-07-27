import {
  getAllOrdersService,
  getOrderByIdService,
  getOrdersByUserIdService,
  createOrderService,
  updateOrderService,
  updateOrderStatusService,
  deleteOrderService,
} from "../services/order_Services.js";
import { validationResult } from "express-validator";

export const getAllOrdersController = async (req, res) => {
  try {
    const result = await getAllOrdersService();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOrderByIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getOrderByIdService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getOrdersByUserIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getOrdersByUserIdService(req.params.userId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createOrderController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await createOrderService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateOrderController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await updateOrderService(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateOrderStatusController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await updateOrderStatusService(req.params.id, req.body.status);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteOrderController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await deleteOrderService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};