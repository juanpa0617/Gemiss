import ItemCart from "../models/items_Cart_Model.js";
import ShoppingCart from "../models/shopping_Carts_Model.js";
import ProductVariant from "../models/product_Variants_Model.js";
import Product from "../models/products_Model.js";

const includeOptions = [
  {
    model: ShoppingCart,
    as: "shoppingCart",
    attributes: ["id", "userId"],
  },
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
];

export const getAllItemCarts = async () => {
  return await ItemCart.findAll({ include: includeOptions });
};

export const getItemCartById = async (id) => {
  return await ItemCart.findByPk(id, { include: includeOptions });
};

export const getItemCartsByShoppingCartId = async (shoppingCartId) => {
  return await ItemCart.findAll({ 
    where: { shoppingCartId },
    include: includeOptions 
  });
};

export const createItemCart = async (itemData) => {
  return await ItemCart.create(itemData);
};

export const updateItemCart = async (id, itemData) => {
  return await ItemCart.update(itemData, { where: { id } });
};

export const deleteItemCart = async (id) => {
  return await ItemCart.destroy({ where: { id } });
};

export const deleteItemCartByCartAndProduct = async (shoppingCartId, productVariantId) => {
  return await ItemCart.destroy({ 
    where: { shoppingCartId, productVariantId } 
  });
};