// Solicita o nome e o XP do herói ao usuário
const nome = prompt("Digite o nome do herói:");
const xp = parseInt(prompt("Digite a quantidade de experiência (XP) do herói:"), 10);

let nivel;

// Classifica o nível com base no XP usando estrutura de decisão
if (xp < 1000) {
    nivel = "Ferro";
} else if (xp <= 2000) {
    nivel = "Bronze";
} else if (xp <= 5000) {
    nivel = "Prata";
} else if (xp <= 7000) {
    nivel = "Ouro";
} else if (xp <= 8000) {
    nivel = "Platina";
} else if (xp <= 9000) {
    nivel = "Ascendente";
} else if (xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Exibe a mensagem final
console.log(`O Herói de nome ${nome} está no nível de ${nivel}.`);
