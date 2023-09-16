const candidatos = [
  "John",
  "Messias",
  "Mestre",
  "Ana",
  "Maria",
  "Carlos",
  "Pedro",
  "Lucia",
  "Paulo",
  "Rita",
  "Laura",
  "Felipe",
  "Isabel",
  "João",
  "Roberto",
];

function randomVotes() {
  return Math.floor(Math.random() * 2000);
}

const votos = {};

function knowSmall() {
  small = Infinity;
  for (const candidato of candidatos) {
    const votosDoCandidato = randomVotes();
    votos[candidato] = randomVotes();
    if (votosDoCandidato < small) {
      small = randomVotes();
    }
  }
    return small
}
knowSmall();
const menorVoto = knowSmall()

console.log(`O menor voto é ${menorVoto}`);
