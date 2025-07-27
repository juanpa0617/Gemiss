import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const OrderDetail = sequelize.define(
    "OrderDetail",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        orderId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "orders", // Asume que la tabla de pedidos se llama 'orders'
                key: "id",
            },
        },
        productVariantId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "product_variants", // Asume que la tabla se llama 'product_variants' o 'product_Variant'
                key: "id",
            },
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        pricePerUnit: { // El precio de la variante al momento de la compra
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        subtotal: { // Cantidad * Precio por unidad para esta línea
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
    },
    {
        tableName: "order_details", // Convención: nombre de tabla en plural
        timestamps: true,
        underscored: true,
    }
);

export default OrderDetail;