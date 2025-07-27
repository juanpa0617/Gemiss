import {
  getAllProductVariantsService,
  getProductVariantByIdService,
  getProductVariantsByProductIdService,
  createProductVariantService,
  updateProductVariantService,
  deleteProductVariantService,
  changeStatusProductVariantService,
} from "../services/product_Variant_Services.js";
import { validationResult } from "express-validator";

export const getAllProductVariantsController = async (req, res) => {
  try {
    const result = await getAllProductVariantsService();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getProductVariantByIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getProductVariantByIdService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getProductVariantsByProductIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getProductVariantsByProductIdService(req.params.productId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createProductVariantController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await createProductVariantService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateProductVariantController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await updateProductVariantService(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteProductVariantController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await deleteProductVariantService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const changeStatusProductVariantController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await changeStatusProductVariantService(req.params.id, req.body.status);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};