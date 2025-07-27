import sequelize from "../config/db.js";
import { DataTypes } from "sequelize";

const WishlistItem = sequelize.define(
  "WishlistItem",
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
        model: "users", 
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
    addedDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    tableName: "wishlist_items", 
    timestamps: false, 
    underscored: true,
  }
);

export default WishlistItem;