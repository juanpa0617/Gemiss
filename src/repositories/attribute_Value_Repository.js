import AttributeValue from "../models/attribute_Values_Model.js";
import Attribute from "../models/attributes_Model.js";

const includeOptions = [
  {
    model: Attribute,
    as: "attribute",
    attributes: ["id", "name"],
  },
];

export const getAllAttributeValues = async () => {
  return await AttributeValue.findAll({ include: includeOptions });
};

export const getAttributeValueById = async (id) => {
  return await AttributeValue.findByPk(id, { include: includeOptions });
};

export const getAttributeValuesByAttributeId = async (attributeId) => {
  return await AttributeValue.findAll({ 
    where: { attributeId },
    include: includeOptions 
  });
};

export const createAttributeValue = async (attributeValueData) => {
  return await AttributeValue.create(attributeValueData);
};

export const updateAttributeValue = async (id, attributeValueData) => {
  return await AttributeValue.update(attributeValueData, { where: { id } });
};

export const deleteAttributeValue = async (id) => {
  return await AttributeValue.destroy({ where: { id } });
};