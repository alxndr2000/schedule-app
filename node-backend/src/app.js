const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes');

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});