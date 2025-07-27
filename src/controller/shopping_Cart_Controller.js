import {
  getAllShoppingCartsService,
  getShoppingCartByIdService,
  getShoppingCartByUserIdService,
  createShoppingCartService,
  updateShoppingCartService,
  deleteShoppingCartService,
} from "../services/shopping_Cart_Services.js";
import { validationResult } from "express-validator";

export const getAllShoppingCartsController = async (req, res) => {
  try {
    const result = await getAllShoppingCartsService();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getShoppingCartByIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getShoppingCartByIdService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getShoppingCartByUserIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getShoppingCartByUserIdService(req.params.userId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createShoppingCartController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await createShoppingCartService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateShoppingCartController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await updateShoppingCartService(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteShoppingCartController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await deleteShoppingCartService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};