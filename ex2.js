/*Escreva um programa JavaScript para pegar a extenção de um arquivo.*/

function extençãoArquivo(nomeArquivo) {
    return nomeArquivo.split('.').pop(); //o split separa o conteúdo em um array e o pop pega o último elemento desse array
}

console.log(extençãoArquivo("documento.pdf.js")); // Output: "pdf"

//OU

const getFileExtension = (str) => str.slice(str.lastIndexOf('.')); //Procura o último . na string e "corta" a string a partir dali

console.log(getFileExtension("imagem.png")); // Output: ".png"
console.log(getFileExtension("arquivo.tar.gz")); // Output: ".gz"