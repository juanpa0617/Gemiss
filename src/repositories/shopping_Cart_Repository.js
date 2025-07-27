import ShoppingCart from "../models/shopping_Carts_Model.js";
import User from "../models/users_Model.js";
import ItemCart from "../models/items_Cart_Model.js";
import ProductVariant from "../models/product_Variants_Model.js";
import Product from "../models/products_Model.js";

const includeOptions = [
  {
    model: User,
    as: "user",
    attributes: ["id", "name", "lastname", "email"],
  },
  {
    model: ItemCart,
    as: "items",
    include: [
      {
        model: ProductVariant,
        as: "productVariant",
        attributes: ["id", "sku", "price", "stock"],
        include: [
          {
            model: Product,
            as: "product",
            attributes: ["id", "name", "slug"],
          },
        ],
      },
    ],
  },
];

export const getAllShoppingCarts = async () => {
  return await ShoppingCart.findAll({ include: includeOptions });
};

export const getShoppingCartById = async (id) => {
  return await ShoppingCart.findByPk(id, { include: includeOptions });
};

export const getShoppingCartByUserId = async (userId) => {
  return await ShoppingCart.findOne({ 
    where: { userId },
    include: includeOptions 
  });
};

export const createShoppingCart = async (cartData) => {
  return await ShoppingCart.create(cartData);
};

export const updateShoppingCart = async (id, cartData) => {
  return await ShoppingCart.update(cartData, { where: { id } });
};

export const deleteShoppingCart = async (id) => {
  return await ShoppingCart.destroy({ where: { id } });
};