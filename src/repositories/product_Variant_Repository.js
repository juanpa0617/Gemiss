import ProductVariant from "../models/product_Variants_Model.js";
import Product from "../models/products_Model.js";

const includeOptions = [
  {
    model: Product,
    as: "product",
    attributes: ["id", "name", "slug"],
  },
];

export const getAllProductVariants = async () => {
  return await ProductVariant.findAll({ include: includeOptions });
};

export const getProductVariantById = async (id) => {
  return await ProductVariant.findByPk(id, { include: includeOptions });
};

export const getProductVariantsByProductId = async (productId) => {
  return await ProductVariant.findAll({ 
    where: { productId },
    include: includeOptions 
  });
};

export const createProductVariant = async (variantData) => {
  return await ProductVariant.create(variantData);
};

export const updateProductVariant = async (id, variantData) => {
  return await ProductVariant.update(variantData, { where: { id } });
};

export const deleteProductVariant = async (id) => {
  return await ProductVariant.destroy({ where: { id } });
};

export const changeStatusProductVariant = async (id, status) => {
  return await ProductVariant.update({ status }, { where: { id } });
};