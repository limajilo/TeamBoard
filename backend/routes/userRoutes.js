import express from "express";
import userController from "../controllers/userController.js";
import userValidate from "../middleware/userValidate.js";

const router = express.Router();

const existingUser = userValidate.existingUser;

router.post("/registerUser", existingUser, userController.registerUser);

export default router;