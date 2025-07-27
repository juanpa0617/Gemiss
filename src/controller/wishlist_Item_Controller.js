import {
  getAllWishlistItemsService,
  getWishlistItemByIdService,
  getWishlistItemsByUserIdService,
  createWishlistItemService,
  deleteWishlistItemService,
  deleteWishlistItemByUserAndProductService,
  checkIfItemInWishlistService,
  toggleWishlistItemService,
} from "../services/wishlist_Item_Services.js";
import { validationResult } from "express-validator";

export const getAllWishlistItemsController = async (req, res) => {
  try {
    const result = await getAllWishlistItemsService();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getWishlistItemByIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getWishlistItemByIdService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getWishlistItemsByUserIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getWishlistItemsByUserIdService(req.params.userId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createWishlistItemController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await createWishlistItemService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteWishlistItemController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await deleteWishlistItemService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteWishlistItemByUserAndProductController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { userId, productVariantId } = req.params;
    const result = await deleteWishlistItemByUserAndProductService(userId, productVariantId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const checkIfItemInWishlistController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { userId, productVariantId } = req.params;
    const result = await checkIfItemInWishlistService(userId, productVariantId);
    res.status(200).json({ inWishlist: result });
  } catch (error) {
    res.status(500).json(error);
  }
};

export const toggleWishlistItemController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { userId, productVariantId } = req.body;
    const result = await toggleWishlistItemService(userId, productVariantId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};