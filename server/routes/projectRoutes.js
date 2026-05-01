const express = require('express');
const router = express.Router();
const {
  createProject,
  getProjects,
  getProject,
  addMember,
  deleteProject,
} = require('../controllers/projectController');
const { protect, admin } = require('../middleware/authMiddleware');

router.use(protect); // All routes are protected

router.post('/', admin, createProject);
router.get('/', getProjects);
router.get('/:id', getProject);
router.post('/:id/add-member', admin, addMember);
router.delete('/:id', admin, deleteProject);

module.exports = router;
