import { 
    getAllAttributeValues, 
    getAttributeValueById, 
    getAttributeValuesByAttributeId,
    createAttributeValue, 
    updateAttributeValue, 
    deleteAttributeValue 
} from "../repositories/attribute_Value_Repository.js";

export const getAllAttributeValuesService = async () => {
    return await getAllAttributeValues();
};

export const getAttributeValueByIdService = async (id) => {
    return await getAttributeValueById(id);
};

export const getAttributeValuesByAttributeIdService = async (attributeId) => {
    return await getAttributeValuesByAttributeId(attributeId);
};

export const createAttributeValueService = async (attributeValueData) => {
    return await createAttributeValue(attributeValueData);
};

export const updateAttributeValueService = async (id, attributeValueData) => {
    return await updateAttributeValue(id, attributeValueData);
};

export const deleteAttributeValueService = async (id) => {
    return await deleteAttributeValue(id);
};