const db = require('../db/models');

class TodoModel {
  async createTodo(task, userId) {
    const newTodo = await db.Todo.create({
      task,
      userId,
      completed: false,
    });
    return newTodo;
  }

  async findAllTodos() {
    return db.Todo.findAll();
  }

  async findUserTask(userId) {
    try {
      const todos = await db.Todo.findAll({
        where: {
          userId: userId,
        },
      });
      return todos;
    } catch (error) {
      console.error('Error in findUserTask:', error);
      throw error;
    }
  }

  async updateTodo(id, task) {
    const [updatedRows, [updatedTodo]] = await db.Todo.update(
      { task },
      {
        where: { id },
        returning: true,
      },
    );
    if (updatedRows === 1) {
      return updatedTodo;
    }
    return null;
  }

  async deleteTodo(id) {
    return db.Todo.destroy({ where: { id } });
  }
}

module.exports = new TodoModel();
