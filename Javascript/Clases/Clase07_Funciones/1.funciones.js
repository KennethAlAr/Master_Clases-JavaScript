function saludar(){
    console.log("Hola");
}

saludar();

function saludarConNombre(nombre){
    const texto = "Hola " + nombre;
    console.log(texto);
}

saludarConNombre("Antonio");
saludarConNombre("Estefania");
saludarConNombre("Jeremi");

function sumarDosNumeros(numeroA, numeroB){
    const total = numeroA + numeroB;
    console.log("El total de " + numeroA + " más " + numeroB + " es " + total);
}

sumarDosNumeros(5, 6);

function calcularElDoble(numero){
    const total = numero *2;
    return total;
}

console.log(calcularElDoble(6))

function guardiaDeSeguridad(edad){
    if(typeof edad !== "number"){
        console.log("No es un número")
        return
    }
}

guardiaDeSeguridad("Hola");

function calcularEdad (nombre, añoNacimiento, añoActual = 2025){
    const edad = añoActual - añoNacimiento;
    console.log(nombre + " tiene " + edad + " años.")
}

calcularEdad("Antonio", 1990);
calcularEdad("Antonio", 1990, 1998);

function calcularEdadObjeto (usuario){
    const edad = (usuario.añoActual || 2025) - usuario.añoNacimiento;
    console.log(usuario.nombre + " tiene " + edad + " años.")
}

const antonio = {
    añoNacimiento: 1990,
    añoActual: 2025,
    nombre: "Antonio",
}

calcularEdadObjeto(antonio);


//FUNCION FLECHA -> ARROW FUNCTION
const saludadorConNombre = (nombre) => {
    console.log("Hola " + nombre);
};

const saludadorConNombreSencillo = nombre => "Hola " + nombre;