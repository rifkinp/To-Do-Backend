const express = require('express');
const cors = require('cors');
const userRoute = require('./user/userRoute');
const todoRoute = require('./todo/todoRoute');
require('dotenv').config();

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

module.exports = app;
