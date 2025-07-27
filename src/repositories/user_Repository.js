import User from "../models/users_Model.js";
import Role from "../models/role_Model.js";
import RolePermission from "../models/role_Permission_Model.js";
import Permission from "../models/permission_Model.js";

export const getAllUsers = async () => {
  return await User.findAll({
    include: [
      {
        model: Role,
        as: "role",
        attributes: ["id", "name"],
        include: [
          {
            model: RolePermission,
            as: "rolePermissions",
            attributes: ["id"],
            include: [
              {
                model: Permission,
                as: "permission",
                attributes: ["id", "name"],
              },
            ],
          },
        ],
      },
    ],
  });
};

export const getUserById = async (id) => {
  return await User.findByPk(id, {
    include: [
      {
        model: Role,
        as: "role",
        attributes: ["id", "name"],
        include: [
          {
            model: RolePermission,
            as: "rolePermissions",
            attributes: ["id"],
            include: [
              {
                model: Permission,
                as: "permission",
                attributes: ["id", "name"],
              },
            ],
          },
        ],
      },
    ],
  });
};

export const createUser = async (userData) => {
  return await User.create(userData);
};

export const updateUser = async (id, userData) => {
  return await User.update(userData, { where: { id: id } });
};

export const deleteUser = async (id) => {
  return await User.destroy({ where: { id: id } });
};

export const changeStatusUser = async (id, status) => {
  return await User.update({ status }, { where: { id: id } });
};
