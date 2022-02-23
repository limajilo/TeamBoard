import task from "../models/task.js";
import user from "../models/user.js";


// Registrar tareas en la base de datos
const registerTask = async (req, res) => {
  if (!req.body.name ||!req.body.description)
    return res.status(400).send({ message: "Incomplete data" });

  const taskId = await task.findOne({ name: "task" });
  if (!taskId) return res.status(500).send({ message: "No task was assigned" });

  //  se crea un nuevo esquema que contiene la info de models/task
  const taskSchema = new task({
    name: req.body.name,
    description: req.body.description,
    taskStatus: req.body.taskStatus,
    imageUrl: req.body.imageUrl,
  });

  const result = await taskSchema.save();

  if (!result)
    return res.status(500).send({ message: "Failed to register task" });
  res.status(200).send({ result });
};
// Listar tareas------------------------------------------
const listTask = async (req, res) => {
  let tasks = await task
    .find({ name: new RegExp(req.params["name"]) })
    .populate("task")
    .exec();
  if (tasks.length === 0)
    return res.status(400).send({ message: "No search results" });

  return res.status(200).send({ tasks });
};

//  Eliminar tareas
const deleteTask = async (req, res) => {
  if (!req.params["name"])
    return res.status(400).send({ message: "Incomplete data" });

  const tasks = await task.findByIdAndUpdate(req.params["name"], {
    dbStatus: false,
  });

  return !tasks
    ? res.status(400).send({ message: "Error deleting task" })
    : res.status(200).send({ message: "Task deleted" });
};

//  Actualizar tareas
const updateTask = async (req, res) => {
  if (
    !req.body.name ||
    !req.body.description ||
    !req.body.taskStatus ||
    !req.body.imageUrl
  )
    return res.status(400).send({ message: "Incomplete data" });

  const editTask = await task.findByIdAndUpdate(req.body._name, {
    name: req.body.name,
    description: req.body.description,
    taskStatus: req.body.taskStatus,
    imageUrl: req.body.imageUrl,
  });

  if (!editTask) return res.status(500).send({ message: "Error editing task" });
  return res.status(200).send({ message: "task updated" });
};

export default {
  registerTask,
  listTask,
  deleteTask,
  updateTask,
};

