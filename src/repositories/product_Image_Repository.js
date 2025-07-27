import ProductImage from "../models/images_Products_Model.js";
import Product from "../models/products_Model.js";

const includeOptions = [
  {
    model: Product,
    as: "product",
    attributes: ["id", "name", "slug"],
  },
];

export const getAllProductImages = async () => {
  return await ProductImage.findAll({ include: includeOptions });
};

export const getProductImageById = async (id) => {
  return await ProductImage.findByPk(id, { include: includeOptions });
};

export const getProductImagesByProductId = async (productId) => {
  return await ProductImage.findAll({ 
    where: { productId },
    include: includeOptions 
  });
};

export const createProductImage = async (imageData) => {
  return await ProductImage.create(imageData);
};

export const updateProductImage = async (id, imageData) => {
  return await ProductImage.update(imageData, { where: { id } });
};

export const deleteProductImage = async (id) => {
  return await ProductImage.destroy({ where: { id } });
};

export const setMainImage = async (productId, imageId) => {
  // Primero quitar main de todas las imágenes del producto
  await ProductImage.update({ isMain: false }, { where: { productId } });
  // Luego establecer la nueva imagen principal
  return await ProductImage.update({ isMain: true }, { where: { id: imageId, productId } });
};