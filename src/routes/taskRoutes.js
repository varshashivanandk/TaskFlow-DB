import { Router } from 'express';
import {
  getTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
} from '../controllers/taskController.js';

const router = Router();

// /api/tasks
router.route('/')
  .get(getTasks)      // GET all
  .post(createTask);  // Create task

// /api/tasks/:id
router.route('/:id')
  .get(getTaskById)   // Get one task
  .put(updateTask)    // Update task
  .delete(deleteTask); // Delete task

export default router;
