const TodoModel = require('./todoModel');

class TodoController {
  // Create a new Todo
  createTodo = async (req, res) => {
    try {
      const { task, userId } = req.body;
      const newTodo = await TodoModel.createTodo(task, userId);
      res.json(newTodo);
    } catch (error) {
      res.status(500).json({ message: 'Error creating todo', error });
    }
  };

  // Get all Todos
  getTodos = async (req, res) => {
    try {
      const todos = await TodoModel.findAllTodos();
      res.json(todos);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching todos', error });
    }
  };

  // Update Todo
  updateTodo = async (req, res) => {
    try {
      const { id, task } = req.body;
      const updatedTodo = await TodoModel.updateTodo(id, task);
      if (updatedTodo) {
        res.json({ message: 'Todo updated successfully', todo: updatedTodo });
      } else {
        res.status(404).json({ message: 'Todo not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error updating todo', error });
    }
  };

  // Delete a Todo
  deleteTodo = async (req, res) => {
    try {
      const { id } = req.body;
      console.log(id);
      const deleted = await TodoModel.deleteTodo(id);
      if (deleted === 1) {
        res.json({ message: 'Todo deleted successfully' });
      } else {
        res.status(404).json({ message: 'Todo not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error deleting todo', error });
    }
  };

  // Get user todos
  getUserTodos = async (req, res) => {
    try {
      const { userId } = req.params;
      const todos = await TodoModel.findUserTask(userId);
      res.json(todos);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching user-specific todos', error });
    }
  };
}

module.exports = new TodoController();
