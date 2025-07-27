import { 
    getAllProductVariants, 
    getProductVariantById, 
    getProductVariantsByProductId,
    createProductVariant, 
    updateProductVariant, 
    deleteProductVariant,
    changeStatusProductVariant 
} from "../repositories/product_Variant_Repository.js";

export const getAllProductVariantsService = async () => {
    return await getAllProductVariants();
};

export const getProductVariantByIdService = async (id) => {
    return await getProductVariantById(id);
};

export const getProductVariantsByProductIdService = async (productId) => {
    return await getProductVariantsByProductId(productId);
};

export const createProductVariantService = async (variantData) => {
    return await createProductVariant(variantData);
};

export const updateProductVariantService = async (id, variantData) => {
    return await updateProductVariant(id, variantData);
};

export const deleteProductVariantService = async (id) => {
    return await deleteProductVariant(id);
};

export const changeStatusProductVariantService = async (id, status) => {
    return await changeStatusProductVariant(id, status);
};