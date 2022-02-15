import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
// Relacion con usuario
    user: {type: mongoose.Schema.Object, ref: "users"},
    name: String,
    description: String,
    taskStatus: "to-do",
    imageUrl: String,
    registerDate: {type:Date, default: Date.now}
});

const task = mongoose.model("tasks", taskSchema);
export default task;