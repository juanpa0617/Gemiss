import {getAllUsersController, getUserByIdController, createUserController, updateUserController, deleteUserController,changeStatusUserController} from '../controller/user_Controller.js';
import express from 'express';


const routes = express.Router();

routes.get("/", getAllUsersController);
routes.get("/:id", getUserByIdController);
routes.post("/", createUserController);
routes.put("/:id", updateUserController);
routes.delete("/:id", deleteUserController);
routes.patch("/:id", changeStatusUserController);

export default routes;