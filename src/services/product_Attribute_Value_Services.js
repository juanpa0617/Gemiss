import { 
    getAllProductAttributeValues, 
    getProductAttributeValuesByProductId,
    getProductAttributeValuesByVariantId,
    createProductAttributeValue, 
    deleteProductAttributeValue 
} from "../repositories/product_Attribute_Value_Repository.js";

export const getAllProductAttributeValuesService = async () => {
    return await getAllProductAttributeValues();
};

export const getProductAttributeValuesByProductIdService = async (productId) => {
    return await getProductAttributeValuesByProductId(productId);
};

export const getProductAttributeValuesByVariantIdService = async (productVariantId) => {
    return await getProductAttributeValuesByVariantId(productVariantId);
};

export const createProductAttributeValueService = async (data) => {
    return await createProductAttributeValue(data);
};

export const deleteProductAttributeValueService = async (productId, productVariantId, attributeValueId) => {
    return await deleteProductAttributeValue(productId, productVariantId, attributeValueId);
};