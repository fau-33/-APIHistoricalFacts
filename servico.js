const { fatosHistoricos } = require("./fatos.js");

function servicoBuscarFatoPorAno(ano) {
  const fato = fatosHistoricos.find((fato) => fato.Ano === ano);

  return fato;

}

exports.servicoBuscarFatoPorAno = servicoBuscarFatoPorAno;