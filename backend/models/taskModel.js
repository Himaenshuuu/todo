// Define the schema
import mongoose from "mongoose";

const taskInstance = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    userId: { type: String, required: true },
    completed: { type: Boolean, required: true }
}, { timestamps: true });

// Create and export the model
const taskModel = mongoose.model("Task", taskInstance);
export default taskModel;
