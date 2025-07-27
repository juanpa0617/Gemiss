import ProductAttributeValue from "../models/product_Attribute_Value_Model.js";
import Product from "../models/products_Model.js";
import ProductVariant from "../models/product_Variants_Model.js";
import AttributeValue from "../models/attribute_Values_Model.js";
import Attribute from "../models/attributes_Model.js";

const includeOptions = [
  {
    model: Product,
    as: "product",
    attributes: ["id", "name"],
  },
  {
    model: ProductVariant,
    as: "productVariant",
    attributes: ["id", "sku"],
  },
  {
    model: AttributeValue,
    as: "attributeValue",
    attributes: ["id", "value"],
    include: [
      {
        model: Attribute,
        as: "attribute",
        attributes: ["id", "name"],
      },
    ],
  },
];

export const getAllProductAttributeValues = async () => {
  return await ProductAttributeValue.findAll({ include: includeOptions });
};

export const getProductAttributeValuesByProductId = async (productId) => {
  return await ProductAttributeValue.findAll({ 
    where: { productId },
    include: includeOptions 
  });
};

export const getProductAttributeValuesByVariantId = async (productVariantId) => {
  return await ProductAttributeValue.findAll({ 
    where: { productVariantId },
    include: includeOptions 
  });
};

export const createProductAttributeValue = async (data) => {
  return await ProductAttributeValue.create(data);
};

export const deleteProductAttributeValue = async (productId, productVariantId, attributeValueId) => {
  return await ProductAttributeValue.destroy({ 
    where: { productId, productVariantId, attributeValueId } 
  });
};
