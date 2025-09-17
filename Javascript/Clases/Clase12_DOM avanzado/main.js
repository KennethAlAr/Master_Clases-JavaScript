//Datos de Pokemon
const pokemons = [
  {
    number: 1,
    name: "bulbasaur",
    type: "grass",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    image_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
  },
  {
    number: 2,
    name: "ivysaur",
    type: "grass",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    image_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/2.png"
  },
  {
    number: 3,
    name: "venusaur",
    type: "grass",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    image_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/3.png"
  },
  {
    number: 4,
    name: "charmander",
    type: "fire",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    image_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png"
  },
  {
    number: 5,
    name: "charmeleon",
    type: "fire",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    image_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/5.png"
  },
  {
    number: 6,
    name: "charizard",
    type: "fire",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    image_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/6.png"
  },
  {
    number: 7,
    name: "squirtle",
    type: "water",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    image_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png"
  },
  {
    number: 8,
    name: "wartortle",
    type: "water",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    image_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/8.png"
  },
  {
    number: 9,
    name: "blastoise",
    type: "water",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    image_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/9.png"
  },
  {
    number: 10,
    name: "caterpie",
    type: "bug",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    image_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/10.png"
  },
  {
    number: 11,
    name: "metapod",
    type: "bug",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    image_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/11.png"
  },
  {
    number: 12,
    name: "butterfree",
    type: "bug",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    image_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/12.png"
  },
  {
    number: 13,
    name: "weedle",
    type: "bug",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    image_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/13.png"
  },
  {
    number: 14,
    name: "kakuna",
    type: "bug",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    image_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/14.png"
  },
  {
    number: 15,
    name: "beedrill",
    type: "bug",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    image_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/15.png"
  },
  {
    number: 16,
    name: "pidgey",
    type: "normal",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    image_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/16.png"
  },
  {
    number: 17,
    name: "pidgeotto",
    type: "normal",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    image_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/17.png"
  },
  {
    number: 18,
    name: "pidgeot",
    type: "normal",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    image_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/18.png"
  },
  {
    number: 19,
    name: "rattata",
    type: "normal",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    image_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/19.png"
  },
  {
    number: 20,
    name: "raticate",
    type: "normal",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    image_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/20.png"
  },
  {
    number: 21,
    name: "spearow",
    type: "normal",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    image_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/21.png"
  },
  {
    number: 22,
    name: "fearow",
    type: "normal",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    image_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/22.png"
  },
  {
    number: 23,
    name: "ekans",
    type: "poison",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    image_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/23.png"
  },
  {
    number: 24,
    name: "arbok",
    type: "poison",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    image_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/24.png"
  },
  {
    number: 25,
    name: "pikachu",
    type: "electric",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    image_back: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png"
  },
];

//Recuperar el contenedor donde voy a pintar los pokemon
const container = document.querySelector("main>ul");

//Por cada uno de los pokemon voy a crear un li dentro del ul
for (const pokemon of pokemons) {
    //Creamos un li vacio
    const li = document.createElement("li");
    //Añadimos una clase a cada uno  los li
    li.classList.add(pokemon.type);
    //Vamos a modificar el innerHTML de los li para crear los elementos de una forma un poco mas ágil
    li.innerHTML = `
    <div>
    <img src="${pokemon.image}" alt="${pokemon.name}">
    <img class="back" src="${pokemon.image_back}" alt="${pokemon.name} backwards">
    </div>
    <h2>#${pokemon.number} - ${pokemon.name}</h2>
    `;
    //Añadimos cada uno de los li al contenedor
    container.appendChild(li);
}