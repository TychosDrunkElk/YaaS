const express = require('express');
const app = express();

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/api/v0');
app.get('/api/v0', (req, res) => {
  if (!req.query.q) {
    return res.status(400).send('question is required: missing q paramater');
  }

  // thing
});

app.listen(3000, () => {
  console.log('ready');
});
