import { 
    getAllAddresses, 
    getAddressById, 
    getAddressesByUserId,
    createAddress, 
    updateAddress, 
    deleteAddress 
} from "../repositories/address_Repository.js";

export const getAllAddressesService = async () => {
    return await getAllAddresses();
};

export const getAddressByIdService = async (id) => {
    return await getAddressById(id);
};

export const getAddressesByUserIdService = async (userId) => {
    return await getAddressesByUserId(userId);
};

export const createAddressService = async (addressData) => {
    return await createAddress(addressData);
};

export const updateAddressService = async (id, addressData) => {
    return await updateAddress(id, addressData);
};

export const deleteAddressService = async (id) => {
    return await deleteAddress(id);
};
