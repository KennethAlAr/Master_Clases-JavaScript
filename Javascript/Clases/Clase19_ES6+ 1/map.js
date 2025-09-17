//MAP
const numeros = [1, 2, 3, 4, 5, 6];

//NORMAL
const porDosNormal = [];

for (const numero of numeros) {
    const resMult = numero * 2;
    porDosNormal.push(resMult);
}

//CON ES6
const porDos = numeros.map((numero) => numero * 2);

//

const habitantes = ["👦", "👦", "👦", "👦", "🐕", "👦", "👦"];

const infeccion = habitantes.map((habitante) => {
    if(habitante === "👦"){
        return "🧟";
    } else {
        return habitante;
    }
});

const pokemon = [{
    name: "Pikachu",
    id: 25,
    sprites: {
        front: "http://pikachu.png",
        front_default: "http://pikachu.png",
        world_dream: {
            front: "http://pikachuBUENO.png"
        },
    },
    dni: 62459832946,
    height: 87,
},
{
    name: "Bulbasaur",
    id: 1,
    sprites: {
        front: "http://bulbasaur.png",
        front_default: "http://bulbasaur.png",
        world_dream: {
            front: "http://bulbasaurBUENO.png"
        },
    },
    dni: 62459832946,
    height: 87,
},
];

const nuevosPokemon = pokemon.map((pokemon) => ({
    name: pokemon.name,
    id: pokemon.id,
    image: pokemon.sprites.world_dream.front,
}))