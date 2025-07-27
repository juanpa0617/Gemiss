import { 
    getAllWishlistItems, 
    getWishlistItemById, 
    getWishlistItemsByUserId,
    createWishlistItem, 
    deleteWishlistItem,
    deleteWishlistItemByUserAndProduct,
    checkIfItemInWishlist 
} from "../repositories/wishlist_Item_Repository.js";

export const getAllWishlistItemsService = async () => {
    return await getAllWishlistItems();
};

export const getWishlistItemByIdService = async (id) => {
    return await getWishlistItemById(id);
};

export const getWishlistItemsByUserIdService = async (userId) => {
    return await getWishlistItemsByUserId(userId);
};

export const createWishlistItemService = async (wishlistData) => {
    return await createWishlistItem(wishlistData);
};

export const deleteWishlistItemService = async (id) => {
    return await deleteWishlistItem(id);
};

export const deleteWishlistItemByUserAndProductService = async (userId, productVariantId) => {
    return await deleteWishlistItemByUserAndProduct(userId, productVariantId);
};

export const checkIfItemInWishlistService = async (userId, productVariantId) => {
    return await checkIfItemInWishlist(userId, productVariantId);
};