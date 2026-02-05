const express = require('express');
const app = express();
const { servicoBuscarFatoPorAno } = require('./servico');

app.get('/', (req, res) => {
  let anoFato = req.query.ano;
  let fato = servicoBuscarFatoPorAno(anoFato);
  res.json({ ano: fato });
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
});