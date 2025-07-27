import Privilege from "../models/privileges_Model.js";


export const getAllPrivileges = async () => {
  return await Privilege.findAll();
}

export const getPrivilegeById = async (id) => {
  return await Privilege.findByPk(id);
}


export const createPrivilege = async (privilegeData) => {
  return await Privilege.create(privilegeData);
}

export const updatePrivilege = async (id, privilegeData) => {
  return await Privilege.update(privilegeData, { where: { id: id } });
}

export const deletePrivilege = async (id) => {
  return await Privilege.destroy({ where: { id: id } });
}