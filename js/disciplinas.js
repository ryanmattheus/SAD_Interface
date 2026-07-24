const disciplinas = [
  { nome: "Matemática", professorResponsavel: "Carlos Eduardo Souza" },
  { nome: "Português", professorResponsavel: "Juliana Martins" },
  { nome: "Ciências", professorResponsavel: "Ana Beatriz Ferreira" }
];

function cadastrarDisciplina(nome, professorResponsavel) {
  const novaDisciplina = { nome, professorResponsavel };
  disciplinas.push(novaDisciplina);
  console.log(`Disciplina "${nome}" cadastrada com sucesso.`);
}

function listarDisciplinas() {
  console.table(disciplinas);
}
function editarDisciplina(indice, novosDados) {
  if (indice < 0 || indice >= disciplinas.length) {
    console.log("Disciplina não encontrada.");
    return;
  }

  disciplinas[indice] = { ...disciplinas[indice], ...novosDados };
  console.log(`Disciplina na posição ${indice} atualizada com sucesso.`);
}

function excluirDisciplina(indice) {
  if (indice < 0 || indice >= disciplinas.length) {
    console.log("Disciplina não encontrada.");
    return;
  }

  disciplinas.splice(indice, 1);
  console.log(`Disciplina na posição ${indice} removida com sucesso.`);
}

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
