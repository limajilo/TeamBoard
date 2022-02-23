import express from "express";
import taskController from "../controllers/taskController.js";
import registerTask from "../controllers/taskController.js";
import updateTask from "../controllers/taskController.js";
import deleteTask from "../controllers/taskController.js";
import listTask from "../controllers/taskController.js";


const router = express.Router();
router.post("/registerTask", taskController.registerTask);

router.get("/listTask/:name?", taskController.listTask);
router.put("/delete/:name", taskController.deleteTask);
router.put("/updateTask", taskController.updateTask);

//http://localhost:3001/api/task/registerTask
router.post("/registerTask", taskController.registerTask);

export default router;
