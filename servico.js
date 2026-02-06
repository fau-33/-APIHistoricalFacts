const { fatosHistoricos } = require("./fatos.js");

function servicoBuscarFatoPorAno(ano) {
  const fato = fatosHistoricos.find((fato) => fato.Ano === ano);

  return fato;

}

function servicoValidaAno(ano) {
  if (ano < 1900 || ano > 2024) {
    return false;
  }
  return true;
}

exports.servicoBuscarFatoPorAno = servicoBuscarFatoPorAno;
exports.servicoValidaAno = servicoValidaAno;