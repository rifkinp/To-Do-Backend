const db = require('../db/models');

class UserModel {
  async registerNewUser(userId) {
    const id = userId.toString();
    console.log(id);
    const createUser = await db.User.create({
      userId: id,
    });
    return createUser;
  }

  async loginUser(userId) {
    return db.User.findOne({
      where: { userId: userId },
    });
  }
}

module.exports = new UserModel();
