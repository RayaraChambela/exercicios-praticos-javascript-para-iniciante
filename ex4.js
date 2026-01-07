/* Escreva um programa JavaScript que pegue a data atual e retorne no formato correto dd/mm/aaaa */

const formatDate = (date = new Date()) => {
    const days = date.getDate();
    const months = date.getMonth() + 1; // Os meses são indexados a partir de 0 por isso sempre deve ser somado 1
    const years = date.getFullYear();
    return `${days}/${months}/${years}`;
}

console.log(formatDate());