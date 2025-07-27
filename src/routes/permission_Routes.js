import { getAllPermissionsController, getPermissionByIdController, createPermissionController, updatePermissionController, deletePermissionController } from "../controller/permission_Controller.js";
import expres from "express";

const router =  expres.Router();

router.get("/", getAllPermissionsController);
router.get("/:id", getPermissionByIdController);
router.post("/", createPermissionController);
router.put("/:id", updatePermissionController);
router.delete("/:id", deletePermissionController);

export default router;