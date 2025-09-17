/*//AÑADIR
localStorage.setItem("theme", "dark");

//CONSULTAR - GET
localStorage.getItem("theme");

//ELIMINAR
localStorage.removeItem("theme");

//CLEAR - Borra toda la memoria que afecte a esa página
localStorage.clear();*/

const themeBtn = document.querySelector("#themeBtn")

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme", "dark") 
        themeBtn.textContent = "☀️"
    } else {
        localStorage.setItem("theme", "light") 
        themeBtn.textContent = "🌑"
    }
});

/*//El localStorage no tiene límite de guardado, persiste en la web.
//El sessionStorage solo respeta la navegación actual.

const array = ["primero", "segundo", "tercero"];

//Aunque guardemos items como arrays, el localStorage lo guarda como string
localStorage.setItem("array", JSON.stringify(array));

//Con JSON.parse lo podemos pasar a array
JSON.parse(localStorage.getItem("array"));*/

//
let collection = []

document.querySelector("#addBtn").addEventListener("click", () =>{
    const value = document.querySelector("#textValue").value;
    collection = [...collection, value]
    localStorage.setItem("collection", JSON.stringify(collection));
    document.querySelector("#textValue").value = "";
    renderItems(collection);
});

const renderItems = (list) => {
    const container = document.querySelector("#container");
    container.innerHTML = "";
    for (const item of list) {
        container.innerHTML += `<li>${item}</li>`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if(localStorage.getItem("theme")){
        const savedTheme = localStorage.getItem("theme")
        if(savedTheme === "dark"){
            document.body.className = "dark"
            themeBtn.textContent = "☀️"
        }
    }
    if(localStorage.getItem("collection")){
        const savedCollection = JSON.parse(localStorage.getItem("collection"));
        collection = savedCollection;
        renderItems(collection);
    }
});