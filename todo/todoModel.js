const db = require('../db/models');

class TodoModel {
  async createTodo(task, userId) {
    const newTodo = await db.Todo.create({
      task,
      userId,
      completed: false
    });
    return newTodo;
  }

  async findAllTodos() {
    return db.Todo.findAll();
  }

  async updateTodo(id, task, completed) {
    return db.Todo.update({ task, completed }, { where: { id } });
  }

  async deleteTodo(id) {
    return db.Todo.destroy({ where: { id } });
  }
}

module.exports = new TodoModel();
