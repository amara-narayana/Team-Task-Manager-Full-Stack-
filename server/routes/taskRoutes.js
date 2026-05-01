const express = require('express');
const router = express.Router();
const {
  createTask,
  getTasks,
  getDashboardStats,
  updateTask,
  deleteTask,
} = require('../controllers/taskController');
const { protect, admin } = require('../middleware/authMiddleware');

router.use(protect); // All routes are protected

router.post('/', admin, createTask);
router.get('/', getTasks);
router.get('/dashboard', getDashboardStats);
router.put('/:id', updateTask);
router.delete('/:id', admin, deleteTask);

module.exports = router;
