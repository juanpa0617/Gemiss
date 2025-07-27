import {
  getAllPermissionsService,
  getPermissionByIdService,
  createPermissionService,
  updatePermissionService,
  deletePermissionService,
} from "../services/permission_Services.js";
import { validationResult } from "express-validator";

export const getAllPermissionsController = async (req, res) => {
  try {
    const permissions = await getAllPermissionsService();
    res.json(permissions);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener los permisos" });
  }
};

export const getPermissionByIdController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const permission = await getPermissionByIdService(req.params.id);
    res.json(permission);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createPermissionController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const permission = await createPermissionService(req.body);
    res.status(201).json(permission);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updatePermissionController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const permission = await updatePermissionService(req.params.id, req.body);
    res.status(200).json(permission);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deletePermissionController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const permission = await deletePermissionService(req.params.id);
    res.status(200).json(permission);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};