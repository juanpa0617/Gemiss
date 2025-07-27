import {getAllRolePermissionsController,assignPermissionToRoleController,updateRolePermissionController,deleteRolePermissionController} from '../controller/roles_Permission_Controller.js';
import express from 'express';

const router = express.Router();

router.get("/", getAllRolePermissionsController);
router.post("/", assignPermissionToRoleController);
router.put("/:id", updateRolePermissionController);
router.delete("/:id", deleteRolePermissionController);


export default router;