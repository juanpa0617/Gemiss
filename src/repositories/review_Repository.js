import Review from "../models/reviews_Model.js";
import Product from "../models/products_Model.js";
import User from "../models/users_Model.js";

const includeOptions = [
  {
    model: Product,
    as: "product",
    attributes: ["id", "name", "slug"],
  },
  {
    model: User,
    as: "user",
    attributes: ["id", "name", "lastname"],
  },
];

export const getAllReviews = async () => {
  return await Review.findAll({ include: includeOptions });
};

export const getReviewById = async (id) => {
  return await Review.findByPk(id, { include: includeOptions });
};

export const getReviewsByProductId = async (productId) => {
  return await Review.findAll({ 
    where: { productId },
    include: includeOptions 
  });
};

export const getReviewsByUserId = async (userId) => {
  return await Review.findAll({ 
    where: { userId },
    include: includeOptions 
  });
};

export const createReview = async (reviewData) => {
  return await Review.create(reviewData);
};

export const updateReview = async (id, reviewData) => {
  return await Review.update(reviewData, { where: { id } });
};

export const deleteReview = async (id) => {
  return await Review.destroy({ where: { id } });
};

export const approveReview = async (id) => {
  return await Review.update({ status: 'approved' }, { where: { id } });
};

export const rejectReview = async (id) => {
  return await Review.update({ status: 'rejected' }, { where: { id } });
};
