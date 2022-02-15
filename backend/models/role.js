import mongoose from "mongoose";
// Esquema js (tabla) de bd
const roleSchema = new mongoose.Schema({
  name: String,
  description: String,
  registerDate: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

const role = mongoose.model("roles",roleSchema);
export default role;
