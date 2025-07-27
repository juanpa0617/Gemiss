import {getAllUsers, getUserById, createUser, updateUser, deleteUser, changeStatusUser } from "../repositories/user_Repository.js";

export const getAllUsersService = async () => {
    return await getAllUsers();
};

export const getUserByIdService = async (id) => {
    return await getUserById(id);
};

export const createUserService = async (userData) => {
    return await createUser(userData);
};

export const updateUserService = async (id, userData) => {
    return await updateUser(id, userData);
};

export const deleteUserService = async (id) => {
    return await deleteUser(id);
};

export const changeStatusUserService = async (id, status) => {
    return await changeStatusUser(id, status);
};