import {
  getAllAddressesController,
  getAddressByIdController,
  getAddressesByUserIdController,
  createAddressController,
  updateAddressController,
  deleteAddressController
} from "../controller/address_Controller.js";
import express from "express";

const router = express.Router();

router.get("/", getAllAddressesController);
router.get("/:id", getAddressByIdController);
router.get("/user/:userId", getAddressesByUserIdController);
router.post("/", createAddressController);
router.put("/:id", updateAddressController);
router.delete("/:id", deleteAddressController);

export default router;