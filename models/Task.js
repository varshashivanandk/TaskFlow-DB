import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  taskId: { type: Number, unique: true },  // your numeric ID
  title: { type: String, required: true },
  description: String,
  dueDate: Date,
  priority: { type: String, enum: ['Low', 'Medium', 'High'], default: 'Low' },
  completed: { type: Boolean, default: false },
}, { timestamps: true });

const Task = mongoose.model('Task', taskSchema);
export default Task;