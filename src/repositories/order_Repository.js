import Order from "../models/orders_Model.js";
import User from "../models/users_Model.js";
import Address from "../models/address_Model.js";
import OrderDetail from "../models/orders_Details_Model.js";
import ProductVariant from "../models/product_Variants_Model.js";
import Product from "../models/products_Model.js";

const includeOptions = [
  {
    model: User,
    as: "user",
    attributes: ["id", "name", "lastname", "email"],
  },
  {
    model: Address,
    as: "shippingAddress",
    attributes: ["id", "street", "city", "state", "zipCode"],
  },
  {
    model: Address,
    as: "billingAddress",
    attributes: ["id", "street", "city", "state", "zipCode"],
  },
  {
    model: OrderDetail,
    as: "details",
    include: [
      {
        model: ProductVariant,
        as: "productVariant",
        attributes: ["id", "sku", "price"],
        include: [
          {
            model: Product,
            as: "product",
            attributes: ["id", "name", "slug"],
          },
        ],
      },
    ],
  },
];

export const getAllOrders = async () => {
  return await Order.findAll({ include: includeOptions });
};

export const getOrderById = async (id) => {
  return await Order.findByPk(id, { include: includeOptions });
};

export const getOrdersByUserId = async (userId) => {
  return await Order.findAll({ 
    where: { userId },
    include: includeOptions 
  });
};

export const createOrder = async (orderData) => {
  return await Order.create(orderData);
};

export const updateOrder = async (id, orderData) => {
  return await Order.update(orderData, { where: { id } });
};

export const updateOrderStatus = async (id, status) => {
  return await Order.update({ status }, { where: { id } });
};

export const deleteOrder = async (id) => {
  return await Order.destroy({ where: { id } });
};