const numeros = [1, 2, 3, 4, 5];

const dobrado = numeros.map((num) => {
    num * 2
});

console.log(dobrado);

let nomes = ["Brenda", "Carlos", "Diana", "Felipe"];

let mensagem = nomes.map((nome) => `Olá, ${nome}`);

let mensagem = nomes.map((nome) => `olá, ${nome.toLocaleLowerCase()}`);

console.log(mensagem);