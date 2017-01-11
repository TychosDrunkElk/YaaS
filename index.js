require('es6-promise').polyfill();
require('isomorphic-fetch');

const apiKey = 'dc6zaTOxFJmzC';

const express = require('express');
const app = express();
const createGiphyService = require('./giphyService');
const service = createGiphyService(apiKey);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world');
});

app.post('/api/v0');
app.get('/api/v0', (req, res) => {
  if (!req.query.q) {
    return service
      .getRandomGif('no')
      .then(gifData => {
        return res.status(400).json({
          status: 'ERROR',
          text: 'question is required: missing q parameter',
          gif: gifData,
        });
      });
  }
  // thing
  return service
    .getRandomGif('yes')
    .then(gifData => {
      return res.json({
        text: 'Yaas', // todo: randomize yes
        gif: gifData,
        status: 'OK',
      });
    })
    .catch(err => {
      return res.json(err);
    });
});

app.listen(process.env.PORT || 3000, () => {
  console.log('ready');
});
