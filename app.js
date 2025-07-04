const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola desde Docker Hub! 🚀');
});

app.listen(3000, () => {
  console.log('App escuchando en http://localhost:3000');
});
