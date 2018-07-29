/**
 * This project is not for production use, don't be picky on the code style and comments
 * This repo will not follow clean code guidelines.
 */
const express = require('express');
const app = express();

/**
 * Case 1: respond immediately. 
 * This is a base line.
 */
app.get('/hello', (req, res) => {
  res.send('Hello World!');
});

/**
 * Case 2: log a message, then respond.
 * See how log is affecting server performance
 */
app.get('/hello_with_log', (req, res) => {
  console.log('Hello World!');
  res.send('Hello World!');
});

/**
 * Case 3: have 1 sec timeout, then respond.
 * See how keep client server connection affecting performance
 */
app.get('/hello_with_1s_timeout', (req, res) => {
  setTimeout(() => {
    res.send('Hello World!');
  }, 1000);
});

/**
 * Case 4: have 5 sec timeout, then respond.
 * See how keep client server connection for MORE time affecting performance
 */
app.get('/hello_with_1s_timeout', (req, res) => {
  setTimeout(() => {
    res.send('Hello World!');
  }, 5000);
});

app.listen(3333, () => console.log('Example app listening on port 3333!'))
