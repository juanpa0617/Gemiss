import Role from "../models/role_Model.js";

export const getAllRoles = async () => {
  return await Role.findAll();
}

export const getRoleById = async (id) => {
  return await Role.findByPk(id);
}
export const createRole = async (roleData) => {
  return await Role.create(roleData);
}
export const updateRole = async (id, roleData) => {
  return await Role.update(roleData, { where: { id: id } });
}
export const deleteRole = async (id) => {
  return await Role.destroy({ where: { id: id } });
}
export const changeStatusRole = async (id, status) => {
  return await Role.update({ status }, { where: { id: id } });
}