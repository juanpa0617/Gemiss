import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const AttributeValue = sequelize.define("AttributeValue", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  attributeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "attributes",
      key: "id",
    },
  },
  value: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  colorCode: {
    type: DataTypes.STRING(100),
    allowNull: true,
  },    
  order: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: "attribute_values", 
  timestamps: false,
  underscored: true,
});

export default AttributeValue; 