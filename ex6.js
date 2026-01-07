/* Escreva um programa JavaScript que crie uma nova string pegando os tres primeiros e os tres ultimos caracteres de uma string e adicionado elas juntas. A string deve ter no minimo 3 caracteres de comprimento, se não, retorna a string original */

const novaString = (str) =>
    str.length <= 3 ? str : str.slice(0, 3) + str.slice(-3); // se o tamanho da string for menor que 3 retorna a string original, senão retorna os 3 primeiros e os 3 ultimos caracteres juntos

console.log(novaString("123456789"));
console.log(novaString("123"));

/* essa estrutura se chama ternário ex:

const idade = 18;

const podeBeber = idade >= 18 ? "Sim" : "Não";

= 

let podeBeber;

if (idade >= 18) {
  podeBeber = "Sim";
} else {
  podeBeber = "Não";
}

*/