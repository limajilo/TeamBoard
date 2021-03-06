import express from "express";
import userController from "../controllers/userController.js";
import userMidd from "../middleware/userValidate.js";
import roleMidd from "../middleware/roleVaildate.js";

const router = express.Router();

router.post(
  "/registerUser",
  userMidd.existingUser,
  roleMidd.existingRole,
  userController.registerUser
);

router.get("/listUser/:name?", userController.listUser);
router.get("/listUserAdmin/:name?", userController.listUserAdmin);
router.post("/login", userController.login);
router.put("/delete/:_id", userController.deleteUser);
router.put("/updateUserAdmin", userController.updateUserAdmin);

export default router;
