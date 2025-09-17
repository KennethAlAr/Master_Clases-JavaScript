//Creamos los datos
const videogames = [
  {
    "title": "Baldur's Gate 3",
    "release_year": 2023,
    "platform": "PC (Steam)",
    "developer": "Larian Studios",
    "genre": "RPG",
    "cover_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1086940/header.jpg"
  },
  {
    "title": "The Witcher 3: Wild Hunt",
    "release_year": 2015,
    "platform": "PC (Steam)",
    "developer": "CD PROJEKT RED",
    "genre": "Action RPG",
    "cover_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/292030/header.jpg"
  },
  {
    "title": "Red Dead Redemption 2",
    "release_year": 2018,
    "platform": "PC (Steam)",
    "developer": "Rockstar Games",
    "genre": "Action-Adventure",
    "cover_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1174180/header.jpg"
  },
  {
    "title": "ELDEN RING",
    "release_year": 2022,
    "platform": "PC (Steam)",
    "developer": "FromSoftware",
    "genre": "Action RPG",
    "cover_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg"
  },
  {
    "title": "Half-Life 2",
    "release_year": 2004,
    "platform": "PC (Steam)",
    "developer": "Valve",
    "genre": "FPS",
    "cover_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/220/header.jpg"
  },
  {
    "title": "Portal 2",
    "release_year": 2011,
    "platform": "PC (Steam)",
    "developer": "Valve",
    "genre": "Puzzle",
    "cover_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/620/header.jpg"
  },
  {
    "title": "God of War (2018)",
    "release_year": 2018,
    "platform": "PC (Steam)",
    "developer": "Santa Monica Studio",
    "genre": "Action-Adventure",
    "cover_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1593500/header.jpg"
  },
  {
    "title": "The Last of Us Part I",
    "release_year": 2022,
    "platform": "PC (Steam)",
    "developer": "Naughty Dog",
    "genre": "Action-Adventure",
    "cover_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1888930/header.jpg"
  },
  {
    "title": "Hades",
    "release_year": 2020,
    "platform": "PC (Steam)",
    "developer": "Supergiant Games",
    "genre": "Roguelike Action",
    "cover_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1145360/header.jpg"
  },
  {
    "title": "Disco Elysium - The Final Cut",
    "release_year": 2019,
    "platform": "PC (Steam)",
    "developer": "ZA/UM",
    "genre": "RPG",
    "cover_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/632470/header.jpg"
  },
  {
    "title": "Mass Effect Legendary Edition",
    "release_year": 2021,
    "platform": "PC (Steam)",
    "developer": "BioWare",
    "genre": "Action RPG",
    "cover_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1328670/header.jpg"
  },
  {
    "title": "Grand Theft Auto V",
    "release_year": 2013,
    "platform": "PC (Steam)",
    "developer": "Rockstar North",
    "genre": "Action-Adventure",
    "cover_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/271590/header.jpg"
  },
  {
    "title": "METAL GEAR SOLID V: The Phantom Pain",
    "release_year": 2015,
    "platform": "PC (Steam)",
    "developer": "Kojima Productions",
    "genre": "Action-Adventure / Stealth",
    "cover_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/287700/header.jpg"
  },
  {
    "title": "DOOM (1993)",
    "release_year": 1993,
    "platform": "PC (Steam)",
    "developer": "id Software",
    "genre": "FPS",
    "cover_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2280/header.jpg"
  },
  {
    "title": "DOOM (2016)",
    "release_year": 2016,
    "platform": "PC (Steam)",
    "developer": "id Software",
    "genre": "FPS",
    "cover_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/379720/header.jpg"
  },
  {
    "title": "Dark Souls III",
    "release_year": 2016,
    "platform": "PC (Steam)",
    "developer": "FromSoftware",
    "genre": "Action RPG",
    "cover_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/374320/header.jpg"
  },
  {
    "title": "Sekiro: Shadows Die Twice",
    "release_year": 2019,
    "platform": "PC (Steam)",
    "developer": "FromSoftware",
    "genre": "Action-Adventure",
    "cover_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/814380/header.jpg"
  },
  {
    "title": "Hollow Knight",
    "release_year": 2017,
    "platform": "PC (Steam)",
    "developer": "Team Cherry",
    "genre": "Metroidvania",
    "cover_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/367520/header.jpg"
  },
  {
    "title": "Celeste",
    "release_year": 2018,
    "platform": "PC (Steam)",
    "developer": "Maddy Makes Games",
    "genre": "Platformer",
    "cover_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/504230/header.jpg"
  },
  {
    "title": "Outer Wilds",
    "release_year": 2019,
    "platform": "PC (Steam)",
    "developer": "Mobius Digital",
    "genre": "Adventure / Exploration",
    "cover_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/753640/header.jpg"
  },
  {
    "title": "The Elder Scrolls V: Skyrim Special Edition",
    "release_year": 2016,
    "platform": "PC (Steam)",
    "developer": "Bethesda Game Studios",
    "genre": "Action RPG",
    "cover_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/489830/header.jpg"
  },
  {
    "title": "Resident Evil 4 (2023)",
    "release_year": 2023,
    "platform": "PC (Steam)",
    "developer": "Capcom",
    "genre": "Survival Horror",
    "cover_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/2050650/header.jpg"
  },
  {
    "title": "Persona 5 Royal",
    "release_year": 2019,
    "platform": "PC (Steam)",
    "developer": "P-Studio (Atlus)",
    "genre": "JRPG",
    "cover_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1687950/header.jpg"
  },
  {
    "title": "CHRONO TRIGGER",
    "release_year": 1995,
    "platform": "PC (Steam)",
    "developer": "Square Enix",
    "genre": "JRPG",
    "cover_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/613830/header.jpg"
  },
  {
    "title": "BioShock",
    "release_year": 2007,
    "platform": "PC (Steam)",
    "developer": "2K Boston / Irrational Games",
    "genre": "FPS / Immersive Sim",
    "cover_url": "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/7670/header.jpg"
  }
];

//Añadimos la funcionalidad al boton del tema. Ejemplo sin constante para utilizar el event.
document.querySelector("#themeBtn").addEventListener("click", (ev) => {
    document.body.classList.toggle("light");
    if(document.body.classList.contains("light")){
        ev.target.textContent = `🌑`
    } else {
        ev.target.textContent = `☀️`
    }
});

//Creamos una función que pinta los datos
const renderVideogames = (videogameList) => {
    const container = document.querySelector("#container");
    //Vaciamos el contenedor para que no se repita con cada una de las busquedas
    container.innerHTML = "";
    //Controlamos el caso en el que no haya coincidencias
    if(!videogameList.length){
        container.innerHTML = "<h2>No hay coincidencias</h2>"
    } else {
        for(const videogame of videogameList) {
            const li = document.createElement("li");
            li.innerHTML = `
                <img src="${videogame.cover_url}" alt="${videogame.name} cover">
                <h2>${videogame.title}</h2>
                <p>${videogame.platform}</p>
                `;
            container.appendChild(li);
        }
    };
};

//Le añadimos el evento al videogameInput
document.querySelector("#videogameInput").addEventListener("input", (ev) => {
    let filteredVideogames = [];
    for (const videogame of videogames) {
        if(videogame.title.toLowerCase().includes(ev.target.value.toLowerCase())) {
            filteredVideogames.push(videogame);
        }
    };
    renderVideogames(filteredVideogames);
})

//Añadimo un evento DOM Content Loaded a la ventana para ejecutar lo que queramos una vez el contenido este cargado al completo en el navegador
window.addEventListener("DOMContentLoaded", () => {
    renderVideogames(videogames);
});