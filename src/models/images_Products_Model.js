import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const ProductImage = sequelize.define(
  "ProductImage",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "products", 
        key: "id",
      },
    },
    imageUrl: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    altText: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    isMain: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "product_images", 
    timestamps: false, 
    underscored: true,
  }
);

export default ProductImage;