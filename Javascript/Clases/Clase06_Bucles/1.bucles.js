for(let i = 0; i < 4; i++){
    console.log("Hola", i);
}

//LANZAMOS EL SCRIPT
// i = 0, true, sumamos uno al final -> Hola 0
// i = 1, true, sumamos uno al final -> Hola 1
// i = 2, true, sumamos uno al final -> Hola 2
// i = 3, true, sumamos uno al final -> Hola 3
// i = 4, false

const movies = ["John Wick", "Nosferatu", "The Evil Dead", "Matrix"];

for(let i=0; i<4; i++){
    console.log(movies[i]);
}

//

const numbers = [5, 45, 67, 2, 78, 90, 45, 3, 2, 23, 87];

let counter = 0;

for(let i=0; i<numbers.length; i++){
    const number = numbers[i];
    counter += number;
}

console.log(counter);

//BUCLE NORMAL
for (let i=0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number);
}
//BUCLE FOROF
for (const number of numbers){
    console.log(number)
}
//BUCLE FOREACH
numbers.forEach((number) => {
    console.log(number);
});

//BUCLE FORIN (para objetos)
const batman = {
    name: "Bruce",
    lastName: "Wayne",
    city: "Gotham",
};

for (const propiedad in batman){
    console.log(propiedad);
}

for (const propiedad in batman){
    console.log(batman[propiedad]);
}