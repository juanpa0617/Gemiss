import OrderDetail from "../models/orders_Details_Model.js";
import Order from "../models/orders_Model.js";
import ProductVariant from "../models/product_Variants_Model.js";
import Product from "../models/products_Model.js";

const includeOptions = [
  {
    model: Order,
    as: "order",
    attributes: ["id", "orderNumber", "status"],
  },
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
];

export const getAllOrderDetails = async () => {
  return await OrderDetail.findAll({ include: includeOptions });
};

export const getOrderDetailById = async (id) => {
  return await OrderDetail.findByPk(id, { include: includeOptions });
};

export const getOrderDetailsByOrderId = async (orderId) => {
  return await OrderDetail.findAll({ 
    where: { orderId },
    include: includeOptions 
  });
};

export const createOrderDetail = async (detailData) => {
  return await OrderDetail.create(detailData);
};

export const updateOrderDetail = async (id, detailData) => {
  return await OrderDetail.update(detailData, { where: { id } });
};

export const deleteOrderDetail = async (id) => {
  return await OrderDetail.destroy({ where: { id } });
};
