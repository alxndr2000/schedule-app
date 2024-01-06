const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes');
require('dotenv').config();
require('better-logging')(console);
console.logLevel = process.env.LOG_LEVEL || 2;

app.use('/api', routes);

app.listen(PORT, () => {
  console.info(`Server listening on ${PORT}`);
});