import Task from '../../models/Task.js';
import Counter from '../../models/Counter.js';

// GET all tasks
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find().sort({ createdAt: -1 });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
};

// GET task by numeric taskId
export const getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({ taskId: parseInt(req.params.id, 10) }); // search by numeric taskId
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.status(200).json(task);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch task' });
  }
};


// CREATE task with auto-increment taskId
export const createTask = async (req, res) => {
  try {
    const lastTask = await Task.findOne().sort({ taskId: -1 }); // highest taskId
    const newTaskId = lastTask ? lastTask.taskId + 1 : 1;

    const { title, description, dueDate, priority, tags } = req.body;
    const task = await Task.create({
      taskId: newTaskId,
      title,
      description,
      dueDate,
      priority,
      tags
    });

    res.status(201).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


// UPDATE task by numeric taskId
export const updateTask = async (req, res) => {
  try {
    const task = await Task.findOneAndUpdate(
      { taskId: Number(req.params.id) },
      req.body,
      { new: true, runValidators: true }
    );
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.status(200).json(task);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE task by numeric taskId
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findOneAndDelete({ taskId: Number(req.params.id) });
    if (!task) return res.status(404).json({ error: 'Task not found' });
    res.status(204).end();
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete task' });
  }
};
