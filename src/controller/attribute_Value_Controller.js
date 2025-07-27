import {
  getAllAttributeValuesService,
  getAttributeValueByIdService,
  getAttributeValuesByAttributeIdService,
  createAttributeValueService,
  updateAttributeValueService,
  deleteAttributeValueService,
} from "../services/attribute_Value_Services.js";
import { validationResult } from "express-validator";

export const getAllAttributeValuesController = async (req, res) => {
  try {
    const result = await getAllAttributeValuesService();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAttributeValueByIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getAttributeValueByIdService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAttributeValuesByAttributeIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getAttributeValuesByAttributeIdService(req.params.attributeId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createAttributeValueController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await createAttributeValueService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateAttributeValueController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await updateAttributeValueService(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteAttributeValueController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await deleteAttributeValueService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
