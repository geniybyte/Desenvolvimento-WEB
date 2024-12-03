function calcularMedia();{
    const nome = document.getElementById('nome').value.trim();
        const disciplina = document.getElementById('disciplina').value;
        const nota1 = parseFloat(document.getElementById('nota1').value);
        const nota2 = parseFloat(document.getElementById('nota2').value);
        const nota3 = parseFloat(document.getElementById('nota3').value);
        const nota4 = parseFloat(document.getElementById('nota4').value);
        const resultadoDiv = document.getElementById('resultado');

        // Verificar se todas as informações foram preenchidas
        if (nome === '' || disciplina === '' || isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
            resultadoDiv.innerHTML = 'Por favor, preencha todos os campos obrigatórios.';
            resultadoDiv.className = 'reprovado';
            return;
}
// Calcular a média
const media = (nota1 + nota2 + nota3 + nota4) / 4;

// Verificar a aprovação
if (media >= 7) {
    resultadoDiv.innerHTML = Parabéns, ${nome}! Você foi aprovado em ${disciplina} com média ${media.toFixed(2)}.;
    resultadoDiv.className = 'aprovado';
} else {
    resultadoDiv.innerHTML = Sinto muito, ${nome}. Você foi reprovado em ${disciplina} com média ${media.toFixed(2)}.;
    resultadoDiv.className = 'reprovado';
}}
/*let soma;


//soma = numero1 + numero2;

//console.log("valor da soma é: " + soma);

const prompt = require('prompt-sync')();
let numero1 = parseFloat(prompt("Digite o valor do numero 1: "));
let numero2 = parseFloat(prompt("Digite o valor do numero 2: "));

soma = numero1 + numero2;

console.log("O resultado da soma é: " + soma);*/
