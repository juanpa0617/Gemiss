// src/models/orders_Model.js
import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Order = sequelize.define(
    "Order",
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
        orderDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW, // Sequelize gestiona esto a la fecha y hora actuales
        },
        totalAmount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        status: {
            type: DataTypes.ENUM("pending", "processing", "shipped", "delivered", "cancelled", "refunded"),
            defaultValue: "pending",
            allowNull: false,
        },
        shippingAddressId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "addresses", // Asume que la tabla de direcciones se llama 'addresses'
                key: "id",
            },
        },
        billingAddressId: {
            type: DataTypes.INTEGER,
            allowNull: true, // Puede ser nulo si es la misma que la de envío
            references: {
                model: "addresses",
                key: "id",
            },
        },
        paymentMethod: {
            type: DataTypes.STRING(50),
            allowNull: false,
        },
        paymentStatus: {
            type: DataTypes.ENUM("paid", "unpaid", "refunded", "failed"),
            defaultValue: "unpaid",
            allowNull: false,
        },
        trackingNumber: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
    },
    {
        tableName: "orders", // Convención: nombre de tabla en plural
        timestamps: true,
        underscored: true,
    }
);

export default Order;