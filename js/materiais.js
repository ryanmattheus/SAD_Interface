
const materiais = [
  {
    titulo: "Introdução à Fotossíntese",
    disciplina: "Ciências",
    serie: "7º ano",
    tipo: "PDF",
    data: "12/06/2026",
    descricao: "Material introdutório sobre o processo de fotossíntese."
  },
  {
    titulo: "Equações do 2º Grau",
    disciplina: "Matemática",
    serie: "9º ano",
    tipo: "Slide",
    data: "05/06/2026",
    descricao: "Apresentação sobre resolução de equações do 2º grau."
  },
  {
    titulo: "Figuras de Linguagem",
    disciplina: "Português",
    serie: "8º ano",
    tipo: "Vídeo",
    data: "01/06/2026",
    descricao: "Videoaula sobre as principais figuras de linguagem."
  },
  {
    titulo: "Frações e Números Decimais",
    disciplina: "Matemática",
    serie: "6º ano",
    tipo: "PDF",
    data: "28/05/2026",
    descricao: "Exercícios sobre frações e números decimais."
  },
  {
    titulo: "O Ciclo da Água",
    disciplina: "Ciências",
    serie: "6º ano",
    tipo: "Vídeo",
    data: "22/05/2026",
    descricao: "Videoaula sobre o ciclo da água na natureza."
  }
];

function cadastrarMaterial(titulo, disciplina, serie, tipo, data, descricao) {
  const novoMaterial = { titulo, disciplina, serie, tipo, data, descricao };
  materiais.push(novoMaterial);
  console.log(`Material "${titulo}" cadastrado com sucesso.`);
}

function listarMateriais() {
  console.table(materiais);
}

function editarMaterial(indice, novosDados) {
  if (indice < 0 || indice >= materiais.length) {
    console.log("Material não encontrado.");
    return;
  }

  materiais[indice] = { ...materiais[indice], ...novosDados };
  console.log(`Material na posição ${indice} atualizado com sucesso.`);
}

function excluirMaterial(indice) {
  if (indice < 0 || indice >= materiais.length) {
    console.log("Material não encontrado.");
    return;
  }

  materiais.splice(indice, 1);
  console.log(`Material na posição ${indice} removido com sucesso.`);
}

function contarMateriais() {
  console.log(`Total de materiais cadastrados: ${materiais.length}`);
  return materiais.length;
}

function listarMateriaisPorSerie(serie) {
  const filtrados = materiais.filter((material) => material.serie === serie);
  console.table(filtrados);
  return filtrados;
}

function listarMateriaisPorDisciplina(disciplina) {
  const filtrados = materiais.filter((material) => material.disciplina === disciplina);
  console.table(filtrados);
  return filtrados;
}

export {
  materiais,
  cadastrarMaterial,
  listarMateriais,
  editarMaterial,
  excluirMaterial,
  contarMateriais,
  listarMateriaisPorSerie,
  listarMateriaisPorDisciplina
};
