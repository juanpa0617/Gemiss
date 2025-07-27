import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const ProductAttributeValue = sequelize.define(
  "ProductAttributeValue",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "products",
        key: "id",
      },
    },
    attributeValueId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "attribute_values", 
        key: "id",
      },
    },
    productVariantId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "product_variants", 
        key: "id",
      },
    },
  },
  {
    tableName: "product_attribute_value",
    timestamps: false,
    underscored: true,
  }
);

export default ProductAttributeValue; 