require('dotenv').config();
const express = require('express');
const userRoute = require('./user/userRoute');
const todoRoute = require('./todo/todoRoute');

const app = express();
const PORT = 3000;
app.use(express.json());

app.use('/user', userRoute);
app.use('/todo', todoRoute);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
