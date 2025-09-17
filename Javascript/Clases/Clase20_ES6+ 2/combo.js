const superheroes = [
  { name: "Batman", age: 35, city: "Gotham", realName: "Bruce Wayne", powerLevel: 85, species: "Human", company: "DC" },
  { name: "Superman", age: 33, city: "Metropolis", realName: "Clark Kent", powerLevel: 100, species: "Kryptonian", company: "DC" },
  { name: "Wonder Woman", age: 3000, city: "Themyscira", realName: "Diana Prince", powerLevel: 95, species: "Amazon", company: "DC" },
  { name: "Flash", age: 28, city: "Central City", realName: "Barry Allen", powerLevel: 92, species: "Metahuman", company: "DC" },
  { name: "Green Lantern", age: 32, city: "Coast City", realName: "Hal Jordan", powerLevel: 88, species: "Human", company: "DC" },
  { name: "Aquaman", age: 40, city: "Atlantis", realName: "Arthur Curry", powerLevel: 90, species: "Atlantean/Human", company: "DC" },
  { name: "Cyborg", age: 25, city: "Detroit", realName: "Victor Stone", powerLevel: 87, species: "Cyborg", company: "DC" },
  { name: "Spider-Man", age: 18, city: "New York", realName: "Peter Parker", powerLevel: 89, species: "Human/Mutate", company: "Marvel" },
  { name: "Iron Man", age: 38, city: "Malibu", realName: "Tony Stark", powerLevel: 85, species: "Human", company: "Marvel" },
  { name: "Captain America", age: 100, city: "Brooklyn", realName: "Steve Rogers", powerLevel: 88, species: "Human (Enhanced)", company: "Marvel" },
  { name: "Hulk", age: 40, city: "Dayton", realName: "Bruce Banner", powerLevel: 97, species: "Human/Mutate", company: "Marvel" },
  { name: "Thor", age: 1500, city: "Asgard", realName: "Thor Odinson", powerLevel: 98, species: "Asgardian", company: "Marvel" },
  { name: "Black Widow", age: 35, city: "Stalingrad", realName: "Natasha Romanoff", powerLevel: 80, species: "Human", company: "Marvel" },
  { name: "Doctor Strange", age: 42, city: "New York", realName: "Stephen Strange", powerLevel: 96, species: "Human (Mystic)", company: "Marvel" },
  { name: "Black Panther", age: 39, city: "Wakanda", realName: "T'Challa", powerLevel: 91, species: "Human (Enhanced)", company: "Marvel" }
];

//La suma de nivel de poder de todos los humanos menores de 40años.
const total = superheroes
.map((superheroes) => ({
    nombre: superheroes.name,
    edad: superheroes.age,
    nivel: superheroes.powerLevel,
    especie: superheroes.species
}))
.filter((superhero) => superhero.especie
.includes("Human") && superhero.edad < 40)
.reduce((acc, superhero) => acc + superhero.nivel, 0);

console.log(total);