//Escreva um programa JavaScript para extrair a primeira metade de uma string


const halfString = (str) => {
    const meio = Math.floor(str.length / 2);
    return str.slice(0, meio);

};

console.log(halfString("1234567"));

// OU

const firstHalf = (str) => str.slice(0, str.length / 2);

console.log(firstHalf('tempo'));