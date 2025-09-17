saludar();
saludar2();

function saludar(){
    console.log("Hola");
}

//Javascript cuando ejecuta el código mueve las funciones arriba de todo, así que, aunque la función se declara después de llamarla, esta se ejecuta igualmente. No pasa lo mismo con las funciones flecha.

const saludar2 = () => {
    console.log("Hola")
};