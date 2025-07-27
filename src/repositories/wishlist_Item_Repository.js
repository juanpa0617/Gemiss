import WishlistItem from "../models/wish_List_Model.js";
import User from "../models/users_Model.js";
import ProductVariant from "../models/product_Variants_Model.js";
import Product from "../models/products_Model.js";

const includeOptions = [
  {
    model: User,
    as: "user",
    attributes: ["id", "name", "lastname", "email"],
  },
  {
    model: ProductVariant,
    as: "productVariant",
    attributes: ["id", "sku", "price"],
    include: [
      {
        model: Product,
        as: "product",
        attributes: ["id", "name", "slug"],
      },
    ],
  },
];

export const getAllWishlistItems = async () => {
  return await WishlistItem.findAll({ include: includeOptions });
};

export const getWishlistItemById = async (id) => {
  return await WishlistItem.findByPk(id, { include: includeOptions });
};

export const getWishlistItemsByUserId = async (userId) => {
  return await WishlistItem.findAll({ 
    where: { userId },
    include: includeOptions 
  });
};

export const createWishlistItem = async (wishlistData) => {
  return await WishlistItem.create(wishlistData);
};

export const deleteWishlistItem = async (id) => {
  return await WishlistItem.destroy({ where: { id } });
};

export const deleteWishlistItemByUserAndProduct = async (userId, productVariantId) => {
  return await WishlistItem.destroy({ 
    where: { userId, productVariantId } 
  });
};

export const checkIfItemInWishlist = async (userId, productVariantId) => {
  const item = await WishlistItem.findOne({ 
    where: { userId, productVariantId } 
  });
  return !!item;
};