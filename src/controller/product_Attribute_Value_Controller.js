import {
  getAllProductAttributeValuesService,
  getProductAttributeValuesByProductIdService,
  getProductAttributeValuesByVariantIdService,
  createProductAttributeValueService,
  deleteProductAttributeValueService,
} from "../services/product_Attribute_Value_Services.js";
import { validationResult } from "express-validator";

export const getAllProductAttributeValuesController = async (req, res) => {
  try {
    const result = await getAllProductAttributeValuesService();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getProductAttributeValuesByProductIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getProductAttributeValuesByProductIdService(req.params.productId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getProductAttributeValuesByVariantIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getProductAttributeValuesByVariantIdService(req.params.variantId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createProductAttributeValueController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await createProductAttributeValueService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteProductAttributeValueController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { productId, productVariantId, attributeValueId } = req.params;
    const result = await deleteProductAttributeValueService(productId, productVariantId, attributeValueId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};