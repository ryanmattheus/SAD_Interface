// Vetor que armazena os avisos cadastrados (em memória)
const avisos = [
  {
    titulo: "Manutenção programada do sistema",
    data: "10/07/2026",
    descricao: "O SAD ficará indisponível das 22h às 23h para manutenção."
  },
  {
    titulo: "Novo prazo de envio de materiais",
    data: "01/07/2026",
    descricao: "Professores têm até o dia 15 para enviar materiais do bimestre."
  }
];

/Cadastra um novo aviso no vetor de avisos./
function cadastrarAviso(titulo, data, descricao) {
  const novoAviso = { titulo, data, descricao };
  avisos.push(novoAviso);
  console.log(`Aviso "${titulo}" cadastrado com sucesso.`);
}

/Lista todos os avisos cadastrados./
function listarAvisos() {
  console.table(avisos);
}

/Edita um aviso existente a partir do índice no vetor./
function editarAviso(indice, novosDados) {
  if (indice < 0 || indice >= avisos.length) {
    console.log("Aviso não encontrado.");
    return;
  }

  avisos[indice] = { ...avisos[indice], ...novosDados };
  console.log(`Aviso na posição ${indice} atualizado com sucesso.`);
}

/Exclui um aviso do vetor a partir do índice./
function excluirAviso(indice) {
  if (indice < 0 || indice >= avisos.length) {
    console.log("Aviso não encontrado.");
    return;
  }

  avisos.splice(indice, 1);
  console.log(`Aviso na posição ${indice} removido com sucesso.`);
}

/Retorna a quantidade de avisos cadastrados./
function contarAvisos() {
  console.log(`Total de avisos cadastrados: ${avisos.length}`);
  return avisos.length;
}

export {
  avisos,
  cadastrarAviso,
  listarAvisos,
  editarAviso,
  excluirAviso,
  contarAvisos
};
