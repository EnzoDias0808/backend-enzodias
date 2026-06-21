const alunos = [
  { nome: "Ricardo", nota: 7.5 },
  { nome: "Junior", nota: 9.0 },
  { nome: "Julia", nota: 4.2 },
  { nome: "Eloisa", nota: 6.5 },
  { nome: "Mariana", nota: 7.9 }
];

const alunosComSituacao = alunos.map(aluno => {
  return {
    ...aluno,
    situacao: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
  };
});

console.log("Alunos com Situação:", alunosComSituacao);

const aprovados = alunosComSituacao.filter(aluno => aluno.situacao === "Aprovado");
const quantidadeAprovados = aprovados.length;

console.log(`Quantidade de aprovados: ${quantidadeAprovados}`);

const somaNotas = alunos.reduce((acumulador, aluno) => acumulador + aluno.nota, 0);
const mediaGeral = somaNotas / alunos.length;

console.log(`Média geral da turma: ${mediaGeral.toFixed(2)}`);