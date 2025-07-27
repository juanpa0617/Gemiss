import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Category = sequelize.define(
  "Category",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    slug: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    parentCategoryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "categories", 
        key: "id",
      },
    },
  },
  {
    tableName: "categories",
    timestamps: false,
    underscored: true
  }
);

export default Category;