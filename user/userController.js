const jwt = require('jsonwebtoken');
const userModel = require('./userModel');
const SECRET_KEY = require;

class UserController {
  registerNewUser = async (req, res) => {
    try {
      const userId = Math.floor(1000 + Math.random() * 9000).toString();
      await userModel.registerNewUser(userId);
      res.json({ userId });
    } catch (error) {
      res.status(500).json({ message: 'Error registering new user', error });
      console.log(error);
    }
  };

  loginUser = async (req, res) => {
    try {
      const { userId } = req.body;
      const user = await userModel.loginUser(userId);
      if (user) {
        const token = jwt.sign({ userId: user.userId }, process.env.SECRET_KEY);
        res.header('Authorization', token).json({ message: 'Login Successful', token });
      } else {
        res.status(400).json({ status: 'Login Failed', message: 'Invalid code' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Error logging in', error });
    }
  };
}

module.exports = new UserController();
