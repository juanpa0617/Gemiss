import Address from "../models/address_Model.js";
import User from "../models/users_Model.js";

const includeOptions = [
  {
    model: User,
    as: "user",
    attributes: ["id", "name", "lastname", "email"],
  },
];

export const getAllAddresses = async () => {
  return await Address.findAll({ include: includeOptions });
};

export const getAddressById = async (id) => {
  return await Address.findByPk(id, { include: includeOptions });
};

export const getAddressesByUserId = async (userId) => {
  return await Address.findAll({ 
    where: { userId },
    include: includeOptions 
  });
};

export const createAddress = async (addressData) => {
  return await Address.create(addressData);
};

export const updateAddress = async (id, addressData) => {
  return await Address.update(addressData, { where: { id } });
};

export const deleteAddress = async (id) => {
  return await Address.destroy({ where: { id } });
};
