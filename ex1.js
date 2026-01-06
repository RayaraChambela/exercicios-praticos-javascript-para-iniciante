/*Escreva um programa JavaScript que cheque dois números e retorne verdadeiro se um dos números for 100 ou se a soma dos dois números for 100.*/    

function checarnum(num1, num2) {
    if (100 === num1 || 100 === num2 || (num1 + num2) === 100) {
        return true;
    } else {
        return false;
    }
}

console.log(checarnum(-100, 200));


// OU

const isEqualTo100 = (a,b) => a === 100 || b === 100 || (a + b) === 100; //não precisa de chaves nem return

console.log(isEqualTo100(50, 50));

/*function isEqualTo100(a, b) {
  return a === 100 || b === 100 || (a + b) === 100;
}
*/ 

