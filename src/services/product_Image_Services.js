import { 
    getAllProductImages, 
    getProductImageById, 
    getProductImagesByProductId,
    createProductImage, 
    updateProductImage, 
    deleteProductImage,
    setMainImage 
} from "../repositories/product_Image_Repository.js";

export const getAllProductImagesService = async () => {
    return await getAllProductImages();
};

export const getProductImageByIdService = async (id) => {
    return await getProductImageById(id);
};

export const getProductImagesByProductIdService = async (productId) => {
    return await getProductImagesByProductId(productId);
};

export const createProductImageService = async (imageData) => {
    return await createProductImage(imageData);
};

export const updateProductImageService = async (id, imageData) => {
    return await updateProductImage(id, imageData);
};

export const deleteProductImageService = async (id) => {
    return await deleteProductImage(id);
};

export const setMainImageService = async (productId, imageId) => {
    return await setMainImage(productId, imageId);
};
