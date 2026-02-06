const express = require('express');
const app = express();
const { servicoBuscarFatoPorAno } = require('./servico');
const { fatosHistoricos } = require('./fatos');

// 1. Rota raiz - SERVIR O FRONTEND PRIMEIRO
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// 2. Arquivos estáticos (CSS, JS, Imagens)
app.use(express.static('public'));

// 3. API - Buscar fato por ano
app.get('/api/fato', (req, res) => {
  let anoFato = req.query.ano;
  let fato = servicoBuscarFatoPorAno(anoFato);

  if (fato) {
    res.json({ ano: fato });
  } else {
    res.status(404).json({ erro: 'Fato não encontrado para o ano informado' });
  }
});

// 4. API - Buscar todos os fatos
app.get('/api/fatos', (req, res) => {
  res.json(fatosHistoricos);
});

// Para rodar localmente
if (process.env.NODE_ENV !== 'production') {
  const PORT = 8080;
  app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
  });
}

module.exports = app;