import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Address = sequelize.define(
    "Address",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "users", // Asume que la tabla de usuarios se llama 'users'
                key: "id",
            },
        },
        addressLine1: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        addressLine2: {
            type: DataTypes.STRING(255),
            allowNull: true, // Opcional
        },
        city: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        postalCode: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        country: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        isDefault: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        },
        addressType: {
            type: DataTypes.ENUM("shipping", "billing", "other"),
            defaultValue: "shipping",
            allowNull: false,
        },
    },
    {
        tableName: "addresses", // Convención: nombre de tabla en plural
        timestamps: true, // `createdAt` y `updatedAt` se gestionarán automáticamente
        underscored: true,
    }
);

export default Address;