import { 
    getAllOrderDetails, 
    getOrderDetailById, 
    getOrderDetailsByOrderId,
    createOrderDetail, 
    updateOrderDetail, 
    deleteOrderDetail 
} from "../repositories/order_Detail_Repository.js";

export const getAllOrderDetailsService = async () => {
    return await getAllOrderDetails();
};

export const getOrderDetailByIdService = async (id) => {
    return await getOrderDetailById(id);
};

export const getOrderDetailsByOrderIdService = async (orderId) => {
    return await getOrderDetailsByOrderId(orderId);
};

export const createOrderDetailService = async (detailData) => {
    return await createOrderDetail(detailData);
};

export const updateOrderDetailService = async (id, detailData) => {
    return await updateOrderDetail(id, detailData);
};

export const deleteOrderDetailService = async (id) => {
    return await deleteOrderDetail(id);
};