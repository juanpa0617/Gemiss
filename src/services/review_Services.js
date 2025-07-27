import { 
    getAllReviews, 
    getReviewById, 
    getReviewsByProductId,
    getReviewsByUserId,
    createReview, 
    updateReview, 
    deleteReview,
    approveReview,
    rejectReview 
} from "../repositories/review_Repository.js";

export const getAllReviewsService = async () => {
    return await getAllReviews();
};

export const getReviewByIdService = async (id) => {
    return await getReviewById(id);
};

export const getReviewsByProductIdService = async (productId) => {
    return await getReviewsByProductId(productId);
};

export const getReviewsByUserIdService = async (userId) => {
    return await getReviewsByUserId(userId);
};

export const createReviewService = async (reviewData) => {
    return await createReview(reviewData);
};

export const updateReviewService = async (id, reviewData) => {
    return await updateReview(id, reviewData);
};

export const deleteReviewService = async (id) => {
    return await deleteReview(id);
};

export const approveReviewService = async (id) => {
    return await approveReview(id);
};

export const rejectReviewService = async (id) => {
    return await rejectReview(id);
};
