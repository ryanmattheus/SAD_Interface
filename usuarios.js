/* =========================================================
   USUÁRIOS — SAD (Sistema de Acervo Digital)
   Módulo responsável pelo cadastro e gerenciamento
   de usuários (professores e alunos).

   Cada usuário possui:
   - nome
   - email
   - senha
   - perfil        ("professor" ou "aluno")
   - disciplina    (preenchido apenas se perfil === "professor")
   - serie         (preenchido apenas se perfil === "aluno")
   ========================================================= */

// Vetor que armazena os usuários cadastrados (em memória)
const usuarios = [
  {
    nome: "Ana Beatriz Ferreira",
    email: "ana.ferreira@escola.edu.br",
    senha: "senha123",
    perfil: "professor",
    disciplina: "Ciências",
    serie: null
  },
  {
    nome: "Pedro Henrique Lima",
    email: "pedro.lima@escola.edu.br",
    senha: "senha123",
    perfil: "aluno",
    disciplina: null,
    serie: "7º ano"
  }
];

/**
 * Cadastra um novo usuário no vetor de usuários.
 * @param {string} nome
 * @param {string} email
 * @param {string} senha
 * @param {string} perfil - "professor" ou "aluno"
 * @param {string|null} disciplina - preenchido se perfil for "professor"
 * @param {string|null} serie - preenchido se perfil for "aluno"
 */
function cadastrarUsuario(nome, email, senha, perfil, disciplina = null, serie = null) {
  const novoUsuario = {
    nome: nome,
    email: email,
    senha: senha,
    perfil: perfil,
    disciplina: perfil === "professor" ? disciplina : null,
    serie: perfil === "aluno" ? serie : null
  };

  usuarios.push(novoUsuario);
  console.log(`Usuário "${nome}" cadastrado com sucesso.`);
}

/**
 * Lista todos os usuários cadastrados.
 */
function listarUsuarios() {
  console.table(usuarios);
}

/**
 * Edita um usuário existente a partir do índice no vetor.
 * @param {number} indice
 * @param {object} novosDados - objeto com as propriedades a alterar
 */
function editarUsuario(indice, novosDados) {
  if (indice < 0 || indice >= usuarios.length) {
    console.log("Usuário não encontrado.");
    return;
  }

  usuarios[indice] = { ...usuarios[indice], ...novosDados };
  console.log(`Usuário na posição ${indice} atualizado com sucesso.`);
}

/**
 * Exclui um usuário do vetor a partir do índice.
 * @param {number} indice
 */
function excluirUsuario(indice) {
  if (indice < 0 || indice >= usuarios.length) {
    console.log("Usuário não encontrado.");
    return;
  }

  usuarios.splice(indice, 1);
  console.log(`Usuário na posição ${indice} removido com sucesso.`);
}

/**
 * Retorna a quantidade de usuários cadastrados.
 * @returns {number}
 */
function contarUsuarios() {
  console.log(`Total de usuários cadastrados: ${usuarios.length}`);
  return usuarios.length;
}

export {
  usuarios,
  cadastrarUsuario,
  listarUsuarios,
  editarUsuario,
  excluirUsuario,
  contarUsuarios
};
