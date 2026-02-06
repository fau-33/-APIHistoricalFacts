const express = require('express');
const app = express();
const { servicoBuscarFatoPorAno } = require('./servico');
const { fatosHistoricos } = require('./fatos');
const path = require('path');

// 1. Arquivos estáticos (CSS, JS, Imagens)
app.use(express.static(path.join(__dirname, 'public')));

// 2. Rota raiz - SERVIR O FRONTEND
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

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

// Porta para rodar localmente ou na Vercel
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

module.exports = app;