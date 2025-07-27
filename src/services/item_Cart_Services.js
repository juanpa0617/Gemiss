import { 
    getAllItemCarts, 
    getItemCartById, 
    getItemCartsByShoppingCartId,
    createItemCart, 
    updateItemCart, 
    deleteItemCart,
    deleteItemCartByCartAndProduct 
} from "../repositories/item_Cart_Repository.js";

export const getAllItemCartsService = async () => {
    return await getAllItemCarts();
};

export const getItemCartByIdService = async (id) => {
    return await getItemCartById(id);
};

export const getItemCartsByShoppingCartIdService = async (shoppingCartId) => {
    return await getItemCartsByShoppingCartId(shoppingCartId);
};

export const createItemCartService = async (itemData) => {
    return await createItemCart(itemData);
};

export const updateItemCartService = async (id, itemData) => {
    return await updateItemCart(id, itemData);
};

export const deleteItemCartService = async (id) => {
    return await deleteItemCart(id);
};

export const deleteItemCartByCartAndProductService = async (shoppingCartId, productVariantId) => {
    return await deleteItemCartByCartAndProduct(shoppingCartId, productVariantId);
};
