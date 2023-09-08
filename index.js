const express = require('express');
const cors = require('cors');
const userRoute = require('./user/userRoute');
const todoRoute = require('./todo/todoRoute');
require('dotenv').config();
const port = 5000;
const app = express();

app.use(
  cors({
    origin: '*',
    credentials: true,
  }),
);

app.options('*', cors());

app.use(express.json());

app.use('/user', userRoute);
app.use('/todo', todoRoute);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
