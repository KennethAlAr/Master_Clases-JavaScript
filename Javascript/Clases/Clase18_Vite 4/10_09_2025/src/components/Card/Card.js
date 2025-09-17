import "./Card.css";

const Card = (language) => {
    return`
    <h2>${language.name}</h2>
    <h3>${language.short}</h3>
    `
};

export default Card;