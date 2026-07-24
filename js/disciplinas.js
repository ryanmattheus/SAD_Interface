/* =========================================================
   DISCIPLINAS — SAD (Sistema de Acervo Digital)
   Módulo responsável pelo cadastro e gerenciamento
   das disciplinas oferecidas pela escola.

   Cada disciplina possui:
   - nome
   - professorResponsavel
   ========================================================= */

// Vetor que armazena as disciplinas cadastradas (em memória)
const disciplinas = [
  { nome: "Matemática", professorResponsavel: "Carlos Eduardo Souza" },
  { nome: "Português", professorResponsavel: "Juliana Martins" },
  { nome: "Ciências", professorResponsavel: "Ana Beatriz Ferreira" }
];

/**
 * Cadastra uma nova disciplina no vetor de disciplinas.
 */
function cadastrarDisciplina(nome, professorResponsavel) {
  const novaDisciplina = { nome, professorResponsavel };
  disciplinas.push(novaDisciplina);
  console.log(`Disciplina "${nome}" cadastrada com sucesso.`);
}

/**
 * Lista todas as disciplinas cadastradas.
 */
function listarDisciplinas() {
  console.table(disciplinas);
}

/**
 * Edita uma disciplina existente a partir do índice no vetor.
 */
function editarDisciplina(indice, novosDados) {
  if (indice < 0 || indice >= disciplinas.length) {
    console.log("Disciplina não encontrada.");
    return;
  }

  disciplinas[indice] = { ...disciplinas[indice], ...novosDados };
  console.log(`Disciplina na posição ${indice} atualizada com sucesso.`);
}

/**
 * Exclui uma disciplina do vetor a partir do índice.
 */
function excluirDisciplina(indice) {
  if (indice < 0 || indice >= disciplinas.length) {
    console.log("Disciplina não encontrada.");
    return;
  }

  disciplinas.splice(indice, 1);
  console.log(`Disciplina na posição ${indice} removida com sucesso.`);
}

/**
 * Retorna a quantidade de disciplinas cadastradas.
 */
function contarDisciplinas() {
  console.log(`Total de disciplinas cadastradas: ${disciplinas.length}`);
  return disciplinas.length;
}

export {
  disciplinas,
  cadastrarDisciplina,
  listarDisciplinas,
  editarDisciplina,
  excluirDisciplina,
  contarDisciplinas
};
