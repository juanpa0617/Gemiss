import permission from "../models/permission_Model.js";

export const getAllPermissions = async () => {
    return await permission.findAll();
};

export const getPermissionById = async (id) => {
    return await permission.findByPk(id);
};

export const createPermission = async (permissionData) => {
    return await permission.create(permissionData);
};

export const updatePermission = async (id, permissionData) => {
    return await permission.update(permissionData, { where: { id } });
};

export const deletePermission = async (id) => {
    return await permission.destroy({ where: { id } });
};