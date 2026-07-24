const series = [
  { nome: "6º ano", quantidadeAlunos: 32 },
  { nome: "7º ano", quantidadeAlunos: 28 },
  { nome: "8º ano", quantidadeAlunos: 30 }
];

function cadastrarSerie(nome, quantidadeAlunos) {
  const novaSerie = { nome, quantidadeAlunos };
  series.push(novaSerie);
  console.log(`Série "${nome}" cadastrada com sucesso.`);
}

function listarSeries() {
  console.table(series);
}

function editarSerie(indice, novosDados) {
  if (indice < 0 || indice >= series.length) {
    console.log("Série não encontrada.");
    return;
  }

  series[indice] = { ...series[indice], ...novosDados };
  console.log(`Série na posição ${indice} atualizada com sucesso.`);
}

/**
 * Exclui uma série do vetor a partir do índice.
 */
function excluirSerie(indice) {
  if (indice < 0 || indice >= series.length) {
    console.log("Série não encontrada.");
    return;
  }

  series.splice(indice, 1);
  console.log(`Série na posição ${indice} removida com sucesso.`);
}

/**
 * Retorna a quantidade de séries cadastradas.
 */
function contarSeries() {
  console.log(`Total de séries cadastradas: ${series.length}`);
  return series.length;
}

export {
  series,
  cadastrarSerie,
  listarSeries,
  editarSerie,
  excluirSerie,
  contarSeries
};
