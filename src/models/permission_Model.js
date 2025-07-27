import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";


const Permission = sequelize.define('Permission', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    status: {
        type: DataTypes.ENUM('active', 'inactive'),
        defaultValue: 'active',
        allowNull: false
    }
}, {
    tableName: 'permissions',
    timestamps: false,
    underscored: true
})

export default Permission;