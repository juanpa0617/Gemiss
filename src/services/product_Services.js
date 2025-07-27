import {
  getAllProduct,
  createProduct,
  getProductById,
  updateProduct,
  deleteProduct,
  changeStatusProduct,
} from "../repositories/product_Repository.js";

export const getAllProductsService = async () => {
  return await getAllProduct();
};

export const createProductService = async (dataProduct) => {
  return await createProduct(dataProduct);
};

export const getProductByIdService = async (id) => {
  return await getProductById(id);
};

export const updateProductService = async (id, dataProduct) => {
  return await updateProduct(id, dataProduct);
};

export const deleteProductService = async (id) => {
  return await deleteProduct(id);
};

export const changeStatusProductService = async (id, status) => {
  return await changeStatusProduct(id, status);
};
