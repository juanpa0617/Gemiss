import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const ShoppingCart = sequelize.define(
    "ShoppingCart",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: true, // Generalmente, un usuario tiene solo UN carrito activo
            references: {
                model: "users", // Asume que la tabla de usuarios se llama 'users'
                key: "id",
            },
        },
        status: {
            type: DataTypes.ENUM("active", "converted", "abandoned", "expired"),
            defaultValue: "active",
            allowNull: false,
        },
    },
    {
        tableName: "shopping_carts", // Convención: nombre de tabla en plural
        timestamps: true, // Para `createdAt` y `updatedAt`
        underscored: true,
    }
);

export default ShoppingCart;