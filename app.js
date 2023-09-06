const express = require('express');

const app = express();
const PORT = 3000;
const users = {};

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/register', (req, res) => {
    const userId = Math.floor(1000 + Math.random() * 9000).toString();
    users[userId] = [];
    res.json({ userId });
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
