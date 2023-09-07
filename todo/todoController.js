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

  // Update a Todo
  updateTodo = async (req, res) => {
    try {
      const { id, task, completed } = req.body;
      const updatedTodo = await TodoModel.updateTodo(id, task, completed);
      if (updatedTodo[0] === 1) {
        res.json({ message: 'Todo updated successfully' });
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
}

module.exports = new TodoController();
