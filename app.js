require('dotenv').config();
const path = require('path');
const cors = require('cors');
const express = require('express');
const app = express();
const morgan = require('morgan');

const api = require('./api');

const client = require('./db/client');
client.connect();

// const apiRouter = require('./api');

//Setup your Middleware and API Router here
app.use(cors());

app.use(morgan('dev'));

app.use(express.json());

// THIS IS WHAT TO COMMENT OUT WHEN EDITING
// app.use(express.static(path.join(__dirname + '/public')));

// if (process.env.NODE_ENV === 'production') {
//   app.use(
//     express.static(path.join(__dirname, '/Client/womens-gear-trade/build'))
//   );
// }

app.use((req, res, next) => {
  console.log('<---BODY SNATCHER STARTS HERE--->');
  console.log(req.body);
  console.log('<---BODY SNATCHER ENDS HERE--->');

  next();
});

app.use('./api', api);

// app.use('/', (req, res) => {
//   res.sendFile(
//     path.join(__dirname, '../Client/vite-project', 'dist', 'index.html')
//   );
// });

// app.get('*', (req, res) => {
//   res.status(404).send({
//     error: '404 - Not Found',
//     message: 'No route found for the requested URL',
//   });
// });

//error handling middleware
app.use((error, req, res, next) => {
  console.error('SERVER ERROR: ', error);
  if (res.statusCode < 400) res.status(500);
  res.send({
    error: error.message,
    name: error.name,
    message: error.message,
    table: error.table,
  });
});

module.exports = app;
