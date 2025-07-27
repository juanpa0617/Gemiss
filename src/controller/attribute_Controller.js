import {
  getAllAttributesService,
  getAttributeByIdService,
  createAttributeService,
  updateAttributeService,
  deleteAttributeService,
} from "../services/attribute_Services.js";
import { validationResult } from "express-validator";

export const getAllAttributesController = async (req, res) => {
  try {
    const result = await getAllAttributesService();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAttributeByIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getAttributeByIdService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createAttributeController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await createAttributeService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateAttributeController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await updateAttributeService(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteAttributeController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await deleteAttributeService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
