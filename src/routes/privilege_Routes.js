import {getAllPrivilegesController,getPrivilegeByIdController,createPrivilegeController,updatePrivilegeController,deletePrivilegeController} from "../controller/privilege_Controller.js";
import express from "express";

const router = express.Router();

router.get("/", getAllPrivilegesController);
router.get("/:id", getPrivilegeByIdController);
router.post("/", createPrivilegeController);
router.put("/:id", updatePrivilegeController);
router.delete("/:id", deletePrivilegeController);

export default router;