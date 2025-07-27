import {getAllRoles, getRoleById, createRole, deleteRole, updateRole,changeStatusRole } from '../repositories/role_Repository.js';
export const getAllRoleService = async () => {
    return await getAllRoles();
}

export const getRoleByIdService = async (id) => {
    return await getRoleById(id);
}

export const createRoleService = async (roleData) => {
    return await createRole(roleData);
}

export const deleteRoleService = async (id) => {
    return await deleteRole(id);
}

export const updateRoleService = async (id, roleData) => {
    return await updateRole(id, roleData);
}

export const changeStatusRoleService = async (id, status) => {
    return await changeStatusRole(id, status);
}