import {
  getAllAddressesService,
  getAddressByIdService,
  getAddressesByUserIdService,
  createAddressService,
  updateAddressService,
  deleteAddressService,
} from "../services/address_Services.js";
import { validationResult } from "express-validator";

export const getAllAddressesController = async (req, res) => {
  try {
    const result = await getAllAddressesService();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAddressByIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getAddressByIdService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getAddressesByUserIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getAddressesByUserIdService(req.params.userId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createAddressController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await createAddressService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateAddressController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await updateAddressService(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteAddressController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await deleteAddressService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};