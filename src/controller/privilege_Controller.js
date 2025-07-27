import {
  getAllPrivilegesService,
  getPrivilegeByIdService,
  createPrivilegeService,
  updatePrivilegeService,
  deletePrivilegeService,
} from "../services/privilege_Services.js";
import { validationResult } from "express-validator";

export const getAllPrivilegesController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const privileges = await getAllPrivilegesService();
    res.status(200).json(privileges);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getPrivilegeByIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const privilege = await getPrivilegeByIdService(req.params.id);
    res.status(200).json(privilege);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createPrivilegeController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const privilege = await createPrivilegeService(req.body);
    res.status(201).json(privilege);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updatePrivilegeController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const privilege = await updatePrivilegeService(req.params.id, req.body);
    res.status(200).json(privilege);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deletePrivilegeController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const privilege = await deletePrivilegeService(req.params.id);
    res.status(200).json(privilege);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
