import Attribute from "../models/attributes_Model.js";

export const getAllAttributes = async () => {
  return await Attribute.findAll();
};

export const getAttributeById = async (id) => {
  return await Attribute.findByPk(id);
};

export const createAttribute = async (attributeData) => {
  return await Attribute.create(attributeData);
};

export const updateAttribute = async (id, attributeData) => {
  return await Attribute.update(attributeData, { where: { id } });
};

export const deleteAttribute = async (id) => {
  return await Attribute.destroy({ where: { id } });
};