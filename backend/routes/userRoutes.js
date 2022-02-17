import express from "express";
import userController from "../controllers/userController.js";
import userMidd from "../middleware/userValidate.js";

const router = express.Router();

router.post("/registerUser", userMidd.existingUser, userController.registerUser);

export default router;