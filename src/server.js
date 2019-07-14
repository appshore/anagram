import 'regenerator-runtime/runtime';
import 'dotenv/config';
import express from 'express';
import cors from 'cors';

import getAnagrams from './anagrams';
import setStore from './store';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// set the store containg all anagrams key/values
const anaStore = setStore();

// uncomment for REST/json only endpoints
// app.use('/*', (req, res, next) => {
//   if (
//     req.headers &&
//     (req.headers.accept === 'application/json' ||
//       req.headers['content-type'] === 'application/json')
//   ) {
//     next();
//   } else {
//     res.status(422).send({ error: 'Invalid API' });
//   }
// });

// neutralise the browser call to get favicon
app.get('/favicon.ico', (req, res) => res.status(204));

// get endpoint where we expect one or many words
app.get('/:words', async (req, res) => {
  const {
    params: { words }
  } = req;
  res.send(await getAnagrams({ anaStore, words }));
});

// catch all for unknown endpoints
app.all('/*', (req, res) => {
  res.status(422).send({ error: 'Unknown endpoint' });
});

app.listen(process.env.PORT, () => {
  /* eslint-disable no-console */
  console.log(`Server listening on port ${process.env.PORT}`);
});
