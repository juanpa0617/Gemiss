import { 
    getAllShoppingCarts, 
    getShoppingCartById, 
    getShoppingCartByUserId,
    createShoppingCart, 
    updateShoppingCart, 
    deleteShoppingCart 
} from "../repositories/shopping_Cart_Repository.js";

export const getAllShoppingCartsService = async () => {
    return await getAllShoppingCarts();
};

export const getShoppingCartByIdService = async (id) => {
    return await getShoppingCartById(id);
};

export const getShoppingCartByUserIdService = async (userId) => {
    return await getShoppingCartByUserId(userId);
};

export const createShoppingCartService = async (cartData) => {
    return await createShoppingCart(cartData);
};

export const updateShoppingCartService = async (id, cartData) => {
    return await updateShoppingCart(id, cartData);
};

export const deleteShoppingCartService = async (id) => {
    return await deleteShoppingCart(id);
};