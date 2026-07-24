/* =========================================================
   SÉRIES / TURMAS — SAD (Sistema de Acervo Digital)
   Módulo responsável pelo cadastro e gerenciamento
   das séries/turmas atendidas pelo acervo.

   Cada série possui:
   - nome
   - quantidadeAlunos
   ========================================================= */

// Vetor que armazena as séries cadastradas (em memória)
const series = [
  { nome: "6º ano", quantidadeAlunos: 32 },
  { nome: "7º ano", quantidadeAlunos: 28 },
  { nome: "8º ano", quantidadeAlunos: 30 }
];

/**
 * Cadastra uma nova série no vetor de séries.
 */
function cadastrarSerie(nome, quantidadeAlunos) {
  const novaSerie = { nome, quantidadeAlunos };
  series.push(novaSerie);
  console.log(`Série "${nome}" cadastrada com sucesso.`);
}

/**
 * Lista todas as séries cadastradas.
 */
function listarSeries() {
  console.table(series);
}

/**
 * Edita uma série existente a partir do índice no vetor.
 */
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
