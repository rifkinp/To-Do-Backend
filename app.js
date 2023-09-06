const express = require('express');
const userRoute = require('./user/userRoute');

const app = express();
const PORT = 3000;
app.use(express.json());

app.use('/user', userRoute);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
