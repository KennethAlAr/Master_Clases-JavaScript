//NODOS
//Recuperar un elemento existente
const title = document.querySelector("#title");

console.dir(title.textContent);
title.textContent = "Ahora este es otro título";
title.id = "titulito";

//Recuperar varios elementos existentes
const parrafos = document.querySelectorAll(".parrafo");
for (const parrafo of parrafos){
    parrafo.remove();
}

//Crear un nuevo nodo
const h2 = document.createElement("h2");
h2.id = "subtitulo";
h2.textContent = "Esto es un subtitulo";


document.body.appendChild(h2);

//Alterar el orden de inyección dinámica
const videojuegos = [
    "The Legend of Zelda: Ocarina of Time",
    "Super Mario 64",
    "The Witcher 3: Wild Hunt",
    "Red Dead Redemption 2",
    "The Legend of Zelda: Breath of the Wild",
    "Dark Souls",
    "Bloodborne",
    "Elden Ring",
    "Half-Life 2",
    "Portal 2",
    "Tetris",
    "Super Mario Bros. 3",
    "Super Mario World",
    "Chrono Trigger",
    "Final Fantasy VII",
    "Persona 5 Royal",
    "The Elder Scrolls V: Skyrim",
    "Grand Theft Auto V",
    "Mass Effect 2",
    "Metal Gear Solid",
    "God of War (2018)",
    "Shadow of the Colossus",
    "Resident Evil 4",
    "Sekiro: Shadows Die Twice",
    "Hollow Knight",
    "Celeste",
    "Undertale",
    "Minecraft",
    "The Last of Us",
    "The Last of Us Part II",
    "Red Dead Redemption",
    "BioShock",
    "Street Fighter II",
    "Super Smash Bros. Ultimate",
    "Pokémon Red/Blue",
    "Pokémon Gold/Silver",
    "Halo: Combat Evolved",
    "Doom (1993)",
    "Journey",
    "Inside"
];

const ul = document.querySelector("#lista");

videojuegos.sort();
videojuegos.reverse();

for (const videojuego of videojuegos){
    const li = document.createElement("li");
    li.textContent = videojuego;
    ul.appendChild(li);
}