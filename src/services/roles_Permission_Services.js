import { getAllRolePermissions,assignPermissionToRole,updateRolePermission,deleteRolePermission } from "../repositories/role_permission_Repository.js";

export const getAllRolePermissionsService = async () => {
    return await getAllRolePermissions();
};

export const assignPermissionToRoleService = async (roleId, permissionId, privilegeId) => {
    return await assignPermissionToRole(roleId, permissionId, privilegeId);
};

export const updateRolePermissionService = async (id, roleId, permissionId, privilegeId) => {
    return await updateRolePermission(id, roleId, permissionId, privilegeId);
};

export const deleteRolePermissionService = async (id) => {
    return await deleteRolePermission(id);
};