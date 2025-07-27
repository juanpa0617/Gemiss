import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const ItemCart = sequelize.define(
    "ItemCart",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        shoppingCartId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "shopping_carts", 
                key: "id",
            },
        },
        productVariantId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: "product_variants", 
                key: "id",
            },
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 1,
        },
        priceAtTimeOfAddition: { 
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
    },
    {
        tableName: "items_cart", 
        timestamps: true,
        underscored: true,
    }
);

export default ItemCart;