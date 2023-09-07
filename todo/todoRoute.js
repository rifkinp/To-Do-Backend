const express = require('express');
const todoController = require('./todoController');
const router = express.Router();
const jwtMiddleware = require('../middleware/jwtMiddleware');

router.post('/create', jwtMiddleware, todoController.createTodo);
router.get('/all', jwtMiddleware, todoController.getTodos);
router.put('/update', jwtMiddleware, todoController.updateTodo);
router.delete('/delete', jwtMiddleware, todoController.deleteTodo);
router.get('/:userId', jwtMiddleware, todoController.getUserTodos);

module.exports = router;
