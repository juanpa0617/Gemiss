import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const Attribute = sequelize.define(
    "Attribute",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM("active", "inactive"),
            defaultValue: "active",
            allowNull: false,
        },
    },
    {
        tableName: "attributes",
        timestamps: false,
        underscored: true,
    }
);

export default Attribute; 