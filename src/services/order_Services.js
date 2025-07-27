import { 
    getAllOrders, 
    getOrderById, 
    getOrdersByUserId,
    createOrder, 
    updateOrder, 
    updateOrderStatus,
    deleteOrder 
} from "../repositories/order_Repository.js";

export const getAllOrdersService = async () => {
    return await getAllOrders();
};

export const getOrderByIdService = async (id) => {
    return await getOrderById(id);
};

export const getOrdersByUserIdService = async (userId) => {
    return await getOrdersByUserId(userId);
};

export const createOrderService = async (orderData) => {
    return await createOrder(orderData);
};

export const updateOrderService = async (id, orderData) => {
    return await updateOrder(id, orderData);
};

export const updateOrderStatusService = async (id, status) => {
    return await updateOrderStatus(id, status);
};

export const deleteOrderService = async (id) => {
    return await deleteOrder(id);
};