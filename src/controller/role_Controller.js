import {
  getAllRoleService,
  getRoleByIdService,
  createRoleService,
  updateRoleService,
  deleteRoleService,
  changeStatusRoleService,
} from "../services/role_Services.js";
import { validationResult } from "express-validator";

export const getAllRoleController = async (req, res) => {
  try {
    const result = await getAllRoleService();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getRoleByIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getRoleByIdService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const createRoleController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await createRoleService(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateRoleController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await updateRoleService(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteRoleController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await deleteRoleService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const changeStatusRoleController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await changeStatusRoleService(
      req.params.id,
      req.body.status
    );
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
