import {
  getAllRolePermissionsService,
  assignPermissionToRoleService,
  updateRolePermissionService,
  deleteRolePermissionService,
} from "../services/roles_Permission_Services.js";
import { validationResult } from "express-validator";

export const getAllRolePermissionsController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await getAllRolePermissionsService();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const assignPermissionToRoleController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const { roleId, permissionId, privilegeId } = req.body; // ← Destructura correctamente
    const result = await assignPermissionToRoleService(
      roleId,
      permissionId,
      privilegeId
    );
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const updateRolePermissionController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await updateRolePermissionService(req.params.id, req.body);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};

export const deleteRolePermissionController = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const result = await deleteRolePermissionService(req.params.id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
};
