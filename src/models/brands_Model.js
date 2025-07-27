import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Brand = sequelize.define('Brand', {
     id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  slug: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
 
  description: { 
    type: DataTypes.TEXT,
    allowNull: true
  },
 
  logoUrl: { 
    type: DataTypes.STRING(255),
    allowNull: true
  }
}, {
  tableName: 'brands',
  timestamps: false,
  underscored: true
});
export default Brand;