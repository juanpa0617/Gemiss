import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Role from "./role_Model.js";
import Permission from "./permission_Model.js";
import Privilege from "./privileges_Model.js";

const RolePermission = sequelize.define(
  "RolePermission",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    roleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Role,
        key: "id",
      },
    },
    permissionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Permission,
        key: "id",
      },
    },
    privilegeId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Privilege,
        key: "id",
      },
    },
  },
  {
    tableName: "role_permissions_privileges",
    timestamps: false,
    underscored: true
  }
);



export default RolePermission;

