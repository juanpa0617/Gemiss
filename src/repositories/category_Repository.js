import Category from "../models/category_Model.js";

export const getAllCategory = async () => {
  return await Category.findAll();
};
export const getCategoryById = async (id) => {
  return await Category.findByPk(id);
};

export const createCategory = async (categoryData) => {
  return await Category.create(categoryData);
};

export const updateCategory = async (categoryData) => {
  return await Category.update(categoryData);
};

export const deleteCategory = async (id) => {
  return await Category.destroy({ where: { id: id } });
};
