const express = require('express');
const app = express();
const { servicoBuscarFatoPorAno } = require('./servico');
const { fatosHistoricos } = require('./fatos');

// Servir arquivos estáticos da pasta public
app.use(express.static('public'));

// Rota para buscar fato por ano
app.get('/api/fato', (req, res) => {
  let anoFato = req.query.ano;
  let fato = servicoBuscarFatoPorAno(anoFato);

  if (fato) {
    res.json({ ano: fato });
  } else {
    res.status(404).json({ erro: 'Fato não encontrado para o ano informado' });
  }
});

// Rota para buscar todos os fatos
app.get('/api/fatos', (req, res) => {
  res.json(fatosHistoricos);
});

app.listen(8080, () => {
  console.log('Server started on port 8080');
});