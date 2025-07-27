import { getAllPermissionsController, getPermissionByIdController, createPermissionController, updatePermissionController, deletePermissionController } from "../controller/permission_Controller.js";
import express from "express"; 

const router = express.Router();

router.get("/", getAllPermissionsController);
router.get("/:id", getPermissionByIdController);
router.post("/", createPermissionController);
router.put("/:id", updatePermissionController);
router.delete("/:id", deletePermissionController);

export default router;