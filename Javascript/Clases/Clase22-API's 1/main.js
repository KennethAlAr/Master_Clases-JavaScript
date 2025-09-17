// const getCharacter = () => {
//     fetch("https://rickandmortyapi.com/api/character")
//         .then((res) => res.json())
//         .then((res) => console.log(res));
// };

// const getCharacter = async() => {
//     const res = await fetch("https://rickandmortyapi.com/api/character");
//     const data = await res.json();
//     console.log(data);
// }

// getCharacter();

const API_KEY = "5c35940365244b57aa993720251309";

const getWeather = async(city) => {
    const res = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
    );
    console.log(res);
    const data = await res.json();
    renderWeather(data);
};

const renderWeather = (data) => {
    document.querySelector("#results").innerHTML = `
        <h1>${data.location.name}, ${data.location.country}</h1>
        <h2>${data.current.temp_c} ºC</h2>
        <p>${data.current.condition.text}</p>
        <img src="${data.current.condition.icon}" alt="${data.current.condition.text} icon">
        <p>Feels like: ${data.current.feelslike_c} ºC</p>
        <p>Humidity: ${data.current.humidity}%</p>
    `
};

document.addEventListener("DOMContentLoaded", () => {
    navigator.geolocation.getCurrentPosition((pos) => {
            getWeather(`${pos.coords.latitude},${pos.coords.longitude}`);
        },
        (err) => {
            console.error("Error obteniendo ubicación:", err);
            getWeather("Barcelona");
        }
    );
});