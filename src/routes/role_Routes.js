import{getAllRoleController, getRoleByIdController, createRoleController, updateRoleController, deleteRoleController, changeStatusRoleController} from '../controller/role_Controller.js'
import express from "express";


const router = express.Router();

router.get("/", getAllRoleController);
router.get("/:id", getRoleByIdController);
router.post("/", createRoleController);
router.put("/:id", updateRoleController);
router.delete("/:id", deleteRoleController);
router.patch("/:id", changeStatusRoleController);

export default router;