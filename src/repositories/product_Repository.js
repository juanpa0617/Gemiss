import Product from "../models/products_Model.js"


export const getAllProduct = async () =>{
    return await Product.findAll();
}

export const getProductById = async (id) =>{
    return await Product.findByPk(id);
}

export const createProduct = async (dataProduct) =>{
    return await Product.create(dataProduct)
}

export const updateProduct = async (id,dataProduct) =>{
    return await Product.update(dataProduct,{where:{id:id}})
}

export const deleteProduct = async (id) =>{
    return await Product.destroy({where:{id:id}})
}

export const changeStatusProduct = async (id,status) =>{
    return await Product.update ({status}, {where:{id:id}})
}