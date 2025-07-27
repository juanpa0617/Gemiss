import RolePermission from "../models/role_Permission_Model.js";
import Role from "../models/role_Model.js";
import Permission from "../models/permission_Model.js";
import Privilege from "../models/privileges_Model.js";

const includeOptions = [
  {
    model: Role,
    as: "role",
    attributes: ["id", "name"],
  },
  {
    model: Permission,
    as: "permission",
    attributes: ["id", "name"],
  },
  {
    model: Privilege,
    as: "privilege",
    attributes: ["id", "name"],
  },
];

export const getAllRolePermissions = async () => {
  return await RolePermission.findAll({ include: includeOptions });
};

export const assignPermissionToRole = async (roleId, permissionId, privilegeId) => {
  return await RolePermission.create({ roleId, permissionId, privilegeId });
};

export const updateRolePermission = async (id, roleId, permissionId, privilegeId) => {
  return await RolePermission.update({ roleId, permissionId, privilegeId }, { where: { id } });
};

export const deleteRolePermission = async (id) => {
  return await RolePermission.destroy({ where: { id } });
};