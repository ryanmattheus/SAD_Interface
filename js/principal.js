/* =========================================================
   PRINCIPAL — SAD (Sistema de Acervo Digital)
   Arquivo responsável por importar os módulos e demonstrar
   o funcionamento das estruturas de dados e funções da
   Fase 2, exclusivamente via console.

   IMPORTANTE: nenhuma linha deste arquivo manipula o DOM.
   Todo o processamento ocorre sobre vetores em memória.
   ========================================================= */

import {
  usuarios,
  cadastrarUsuario,
  listarUsuarios,
  editarUsuario,
  excluirUsuario,
  contarUsuarios
} from "./usuarios.js";

import {
  materiais,
  cadastrarMaterial,
  listarMateriais,
  editarMaterial,
  excluirMaterial,
  contarMateriais,
  listarMateriaisPorSerie,
  listarMateriaisPorDisciplina
} from "./materiais.js";

import {
  disciplinas,
  cadastrarDisciplina,
  listarDisciplinas,
  editarDisciplina,
  excluirDisciplina,
  contarDisciplinas
} from "./disciplinas.js";

import {
  series,
  cadastrarSerie,
  listarSeries,
  editarSerie,
  excluirSerie,
  contarSeries
} from "./series.js";

import {
  avisos,
  cadastrarAviso,
  listarAvisos,
  editarAviso,
  excluirAviso,
  contarAvisos
} from "./avisos.js";

/* ---------------------------------------------------------
   DEMONSTRAÇÃO — USUÁRIOS
   --------------------------------------------------------- */
console.log("===== USUÁRIOS =====");
listarUsuarios();

cadastrarUsuario(
  "Marcos Vinícius Alves",
  "marcos.alves@escola.edu.br",
  "senha123",
  "professor",
  "Matemática"
);
listarUsuarios();

editarUsuario(0, { disciplina: "Biologia" });
listarUsuarios();

contarUsuarios();

excluirUsuario(1);
listarUsuarios();

/* ---------------------------------------------------------
   DEMONSTRAÇÃO — MATERIAIS
   --------------------------------------------------------- */
console.log("===== MATERIAIS =====");
listarMateriais();

cadastrarMaterial(
  "Tabela Periódica na Prática",
  "Ciências",
  "8º ano",
  "Slide",
  "15/05/2026",
  "Slides com exercícios sobre a tabela periódica."
);
listarMateriais();

editarMaterial(0, { titulo: "Introdução à Fotossíntese (Revisado)" });
listarMateriais();

contarMateriais();

console.log("Materiais do 7º ano:");
listarMateriaisPorSerie("7º ano");

console.log("Materiais de Matemática:");
listarMateriaisPorDisciplina("Matemática");

excluirMaterial(2);
listarMateriais();

/* ---------------------------------------------------------
   DEMONSTRAÇÃO — DISCIPLINAS
   --------------------------------------------------------- */
console.log("===== DISCIPLINAS =====");
listarDisciplinas();

cadastrarDisciplina("História", "Roberta Nascimento");
listarDisciplinas();

editarDisciplina(0, { professorResponsavel: "Carlos E. Souza Jr." });
listarDisciplinas();

contarDisciplinas();

excluirDisciplina(3);
listarDisciplinas();

/* ---------------------------------------------------------
   DEMONSTRAÇÃO — SÉRIES / TURMAS
   --------------------------------------------------------- */
console.log("===== SÉRIES / TURMAS =====");
listarSeries();

cadastrarSerie("9º ano", 26);
listarSeries();

editarSerie(0, { quantidadeAlunos: 33 });
listarSeries();

contarSeries();

excluirSerie(3);
listarSeries();

/* ---------------------------------------------------------
   DEMONSTRAÇÃO — AVISOS
   --------------------------------------------------------- */
console.log("===== AVISOS =====");
listarAvisos();

cadastrarAviso(
  "Semana de provas",
  "20/07/2026",
  "As provas do bimestre começam na próxima segunda-feira."
);
listarAvisos();

editarAviso(0, { descricao: "Manutenção reagendada para 23h às 00h." });
listarAvisos();

contarAvisos();

excluirAviso(2);
listarAvisos();
