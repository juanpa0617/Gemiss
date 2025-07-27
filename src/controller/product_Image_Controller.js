import {
  getAllProductImagesService,
  getProductImageByIdService,
  getProductImagesByProductIdService,
  createProductImageService,
  updateProductImageService,
  deleteProductImageService,
  setMainImageService,
} from "../services/product_Image_Services.js";
import { validationResult } from "express-validator";

export const getAllProductImagesController = async (req, res) => {
  try {
    const result = await getAllProductImagesService();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getProductImageByIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getProductImageByIdService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getProductImagesByProductIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getProductImagesByProductIdService(req.params.productId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createProductImageController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await createProductImageService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateProductImageController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await updateProductImageService(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteProductImageController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await deleteProductImageService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const setMainImageController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { productId, imageId } = req.params;
    const result = await setMainImageService(productId, imageId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};