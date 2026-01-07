/*Escreva um programa em JavaScript para substituir todo caractere em string pelo próximo caractere no alfabeto*/

// String.fromCharCode
//charCodeAt
//char -> percorre cada caractere do array e retorna um novo array com os valores transformados.
//char.charCodeAt(0) -> retorna o código ASCII/Unicode do caractere.

const alfabeto = (str) => 
    str
    .split('')
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');

console.log(alfabeto('abcd'));