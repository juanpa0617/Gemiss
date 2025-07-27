import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Category from "./category_Model.js";
import Brand from "./brands_Model.js";
import { v4 as uuidv4 } from "uuid";

const Product = sequelize.define(
  "Product",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    uuid: {
      type: DataTypes.STRING(36),
      allowNull: false,
      unique: true,
      defaultValue: () => uuidv4(),
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    shortDescription: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
    longDescription: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Category,
        key: "id",
      },
    },
    brandId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Brand,
        key: "id",
      },
    },
    basePrice: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        min: 0 // ✅ Agregar validación
      }
    },
    baseSku: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    status: {
      type: DataTypes.ENUM("active", "inactive", "archived"),
      allowNull: false,
      defaultValue: "active",
    },
  },
  {
    tableName: "products",
    timestamps: true, 
    underscored: true,
  
    indexes: [
      {
        fields: ['category_id']
      },
      {
        fields: ['brand_id']
      },
      {
        fields: ['status']
      }
    ]
  }
);

export default Product;