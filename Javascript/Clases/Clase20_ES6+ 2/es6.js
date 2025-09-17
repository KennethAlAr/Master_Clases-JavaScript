//MÉTODOS DE ARRAYS DE ES6

const superheroes = [
  { name: "Batman", age: 35, city: "Gotham", realName: "Bruce Wayne" },
  { name: "Superman", age: 33, city: "Metropolis", realName: "Clark Kent" },
  { name: "Wonder Woman", age: 3000, city: "Themyscira", realName: "Diana Prince" },
  { name: "Flash", age: 28, city: "Central City", realName: "Barry Allen" },
  { name: "Green Lantern", age: 32, city: "Coast City", realName: "Hal Jordan" },
  { name: "Aquaman", age: 40, city: "Atlantis", realName: "Arthur Curry" },
  { name: "Cyborg", age: 25, city: "Detroit", realName: "Victor Stone" },
  { name: "Spider-Man", age: 18, city: "New York", realName: "Peter Parker" },
  { name: "Iron Man", age: 38, city: "Malibu", realName: "Tony Stark" },
  { name: "Captain America", age: 100, city: "Brooklyn", realName: "Steve Rogers" },
  { name: "Hulk", age: 40, city: "Dayton", realName: "Bruce Banner" },
  { name: "Thor", age: 1500, city: "Asgard", realName: "Thor Odinson" },
  { name: "Black Widow", age: 35, city: "Stalingrad", realName: "Natasha Romanoff" },
  { name: "Doctor Strange", age: 42, city: "New York", realName: "Stephen Strange" },
  { name: "Black Panther", age: 39, city: "Wakanda", realName: "T'Challa" }
];

//FILTER
const youngSuperheroes = superheroes.filter((superhero) => superhero.age < 40);

const superheroesWithB = superheroes.filter((superhero) => superhero.name.toLowerCase().includes("b"));

console.log(youngSuperheroes);
console.log(superheroesWithB);

//FIND
const batman = superheroes.find((superheroe) => superheroe.name === "Batman");

console.log(batman);

//EVERY
const todosJovenes = superheroes.every((superhero) => superhero.age < 40);
console.log(todosJovenes);

//SOME
const algunosJovenes = superheroes.some((superhero) => superhero.age < 40);
console.log(algunosJovenes);

//REDUCE
const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

const total = numeros.reduce((acc, numero) => {
    return acc + numero
}, 0);
console.log(total);

// FILTER CON REDUCE
// const youngSuperheroes = superheroes.filter((superhero) => superhero.age < 40);

const youngSuperheroes2 = superheroes.reduce((acc, superhero) => {
    if(superhero.age < 40){
        acc.push(superhero)
    }
    return acc
}, []);

console.log(youngSuperheroes2);