import {getAllCategory, getCategoryById, deleteCategory, updateCategory, createCategory} from '../repositories/category_Repository.js'

export const getAllCategoryService = async () => {
    return await getAllCategory();
};

export const getCategoryByIdService = async (id) => {
    return await getCategoryById(id);
};
export const createCategoryService = async (categoryData) => {
    return await createCategory(categoryData);
};

export const updateCategoryService = async (id, categoryData) => {
    return await updateCategory(id, categoryData);
};

export const deleteCategoryService = async (id) => {
    return await deleteCategory(id);
};

