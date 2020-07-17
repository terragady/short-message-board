const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const morgan = require('morgan');
const BodyParser = require('body-parser');
const connectDB = require('./config/db');

const items = require('./routes/api');

// Load config
dotenv.config({ path: './config/config.env' });

connectDB();

const app = express();

// logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// static folder

app.use(express.static(path.join(__dirname, 'client')));

// middleware

app.use(BodyParser.json());

// routes
app.use('/api/items', items);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.use((req, res, next) => {
  const error = new Error(`Not found - ${req.originalUrl}`);
  res.status(404);
  next(error);
});

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);
  res.json({
    message: error.message,
    stack: process.env.NODE_ENV === 'production' ? '🍩' : error.stack,
  });
});
const PORT = process.env.PORT || 3001;

app.listen(
  PORT,
  // eslint-disable-next-line no-console
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`),
);