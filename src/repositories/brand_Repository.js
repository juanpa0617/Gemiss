import Brand from "../models/brands_Model.js";


export const getAllBrands = async () => {
  return await Brand.findAll();
}

export const getBrandById = async (id) => {
  return await Brand.findByPk(id);
}

export const createBrand = async (brandData) => {
  return await Brand.create(brandData);
}

export const updateBrand = async (id, brandData) => {
  return await Brand.update(brandData, { where: { id: id } });
}

export const deleteBrand = async (id) => {
  return await Brand.destroy({ where: { id: id } });
}
