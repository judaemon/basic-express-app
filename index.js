const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Express app listening`);
});

app.get('/', (req, res) => {
  res.send('Hello from Dockerized Express!');
});
