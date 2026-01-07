const addNew = (str) =>
    str.indexOf("New!") === 0 ? str : `New! ${str}`; //Se já houver "New" no inicio não repetir

console.log(addNew("Product 1")); // Output: "New! Product 1"
console.log(addNew("New! Product 2")); // Output: "New! Product 2"