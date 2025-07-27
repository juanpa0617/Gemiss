import {getAllUsersController, getUserByIdController, createUserController, updateUserController, deleteUserController,changeStatusUserController} from '../controller/user_Controller.js';
import { Router } from "express";

const router = Router();

router.get("/", getAllUsersController);
router.get("/:id", getUserByIdController);
router.post("/", createUserController);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);
router.patch("/:id", changeStatusUserController);

export default router;