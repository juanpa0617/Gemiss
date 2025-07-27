import { getAllPermissions, getPermissionById, createPermission, updatePermission, deletePermission } from "../repositories/permission_Repository.js";

export const getAllPermissionsService = async () => {
    return await getAllPermissions();
};

export const getPermissionByIdService = async (id) => {
    return await getPermissionById(id);
};

export const createPermissionService = async (permissionData) => {
    return await createPermission(permissionData);
};

export const updatePermissionService = async (id, permissionData) => {
    return await updatePermission(id, permissionData);
};

export const deletePermissionService = async (id) => {
    return await deletePermission(id);
};