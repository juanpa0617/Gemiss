import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Privilege = sequelize.define(
  "Privilege",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.ENUM("create", "read", "update", "delete", "patch"),
      allowNull: false,
      unique: true,
    },
   
  },
  {
    tableName: "privileges",
    timestamps: false,
    underscored: true
  }
);

export default Privilege;
