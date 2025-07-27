import { getAllAttributes, getAttributeById, createAttribute, updateAttribute, deleteAttribute } from "../repositories/attribute_Repository.js";

export const getAllAttributesService = async () => {
    return await getAllAttributes();
};

export const getAttributeByIdService = async (id) => {
    return await getAttributeById(id);
};

export const createAttributeService = async (attributeData) => {
    return await createAttribute(attributeData);
};

export const updateAttributeService = async (id, attributeData) => {
    return await updateAttribute(id, attributeData);
};

export const deleteAttributeService = async (id) => {
    return await deleteAttribute(id);
};