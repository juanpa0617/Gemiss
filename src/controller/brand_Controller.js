
import { getAllBrandsService, getBrandByIdService, createBrandService, updateBrandService, deleteBrandService } from "../services/brand_Services.js";
import { validationResult } from "express-validator";

export const getAllBrandsController = async (req, res) => {
  try {
    const brands = await getAllBrandsService();
    res.status(200).json(brands);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getBrandByIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const brand = await getBrandByIdService(req.params.id);
    res.status(200).json(brand);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createBrandController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const brand = await createBrandService(req.body);
    res.status(201).json(brand);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateBrandController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const brand = await updateBrandService(req.params.id, req.body);
    res.status(200).json(brand);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteBrandController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const brand = await deleteBrandService(req.params.id);
    res.status(200).json(brand);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
