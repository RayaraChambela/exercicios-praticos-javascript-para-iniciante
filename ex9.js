//Dado dois valores descubra qual é mais perto de 100

const pertoCem = (num1, num2) => 
    Math.abs(100 - num1) < Math.abs(100 - num2) ? num1 : num2;

console.log(pertoCem(400, 60));

// Math.abs -> Retorna o valor absoluto de um número 