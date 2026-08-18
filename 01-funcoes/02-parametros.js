// function apresentar(nome){
//     console.log(`Olá, ${nome}`);
// }

// apresentar("Tardin");

function somar (a, b){
    console.log(`${a} + ${b} = ${a + b}`);
}

somar(8, 15);

function apresentar(nome = "Visitante"){
    console.log(`Olá, ${nome}`);
}

apresentar();
apresentar("Tardin");