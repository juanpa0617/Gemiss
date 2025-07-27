import {getAllPrivileges, getPrivilegeById, createPrivilege, updatePrivilege, deletePrivilege} from '../repositories/privilege_Repository.js'

export const getAllPrivilegesService = async () => {
    return await getAllPrivileges();
}

export const getPrivilegeByIdService = async (id) => {
    return await getPrivilegeById(id);
}

export const createPrivilegeService = async (privilegeData) => {
    return await createPrivilege(privilegeData);
}

export const updatePrivilegeService = async (id, privilegeData) => {
    return await updatePrivilege(id, privilegeData);
}

export const deletePrivilegeService = async (id) => {
    return await deletePrivilege(id);
}