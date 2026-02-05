const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'API Historical Facts' });
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
});