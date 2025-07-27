import { getAllBrands, getBrandById, createBrand, updateBrand, deleteBrand } from "../repositories/brand_Repository.js"; 

export const getAllBrandsService = async () => {
    return await getAllBrands();
}; 

export const getBrandByIdService = async (id) => {
    return await getBrandById(id);
}; 

export const createBrandService = async (brandData) => {
    return await createBrand(brandData);
}; 

export const updateBrandService = async (id, brandData) => {
    return await updateBrand(id, brandData);
}; 

export const deleteBrandService = async (id) => {
    return await deleteBrand(id);
};