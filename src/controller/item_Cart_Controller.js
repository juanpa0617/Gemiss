import {
  getAllItemCartsService,
  getItemCartByIdService,
  getItemCartsByShoppingCartIdService,
  createItemCartService,
  updateItemCartService,
  deleteItemCartService,
  deleteItemCartByCartAndProductService,
} from "../services/item_Cart_Services.js";
import { validationResult } from "express-validator";

export const getAllItemCartsController = async (req, res) => {
  try {
    const result = await getAllItemCartsService();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getItemCartByIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getItemCartByIdService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getItemCartsByShoppingCartIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getItemCartsByShoppingCartIdService(req.params.shoppingCartId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createItemCartController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await createItemCartService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateItemCartController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await updateItemCartService(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteItemCartController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await deleteItemCartService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteItemCartByCartAndProductController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { shoppingCartId, productVariantId } = req.params;
    const result = await deleteItemCartByCartAndProductService(shoppingCartId, productVariantId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};