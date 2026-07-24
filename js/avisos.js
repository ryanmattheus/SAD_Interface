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

function cadastrarAviso(titulo, data, descricao) {
  const novoAviso = { titulo, data, descricao };
  avisos.push(novoAviso);
  console.log(`Aviso "${titulo}" cadastrado com sucesso.`);
}

function listarAvisos() {
  console.table(avisos);
}

function editarAviso(indice, novosDados) {
  if (indice < 0 || indice >= avisos.length) {
    console.log("Aviso não encontrado.");
    return;
  }

  avisos[indice] = { ...avisos[indice], ...novosDados };
  console.log(`Aviso na posição ${indice} atualizado com sucesso.`);
}

function excluirAviso(indice) {
  if (indice < 0 || indice >= avisos.length) {
    console.log("Aviso não encontrado.");
    return;
  }

  avisos.splice(indice, 1);
  console.log(`Aviso na posição ${indice} removido com sucesso.`);
}

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
