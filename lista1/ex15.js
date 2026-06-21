const alunos = [
  { nome: "Ricardo", nota: 6.8 },
  { nome: "Migueç", nota: 7.0 },
  { nome: "Antonia", nota: 9.4 },
  { nome: "Felipe", nota: 7.9 },
  { nome: "Ana", nota: 9.8 }
];

const alunosComSituacao = alunos.map(aluno => {
  return {
    ...aluno,
    situacao: aluno.nota >= 6 ? "Aprovado" : "Reprovado"
  };
});

console.log("Alunos com Situação:", alunosComSituacao);

const aprovados = alunosComSituacao.filter(aluno => aluno.situacao === "Aprovado");
const quantidadeAprovados = aprovados.length;

console.log(`Quantidade de aprovados: ${quantidadeAprovados}`);

const somaNotas = alunos.reduce((acumulador, aluno) => acumulador + aluno.nota, 0);
const mediaGeral = somaNotas / alunos.length;

console.log(`Média geral da turma: ${mediaGeral.toFixed(2)}`);