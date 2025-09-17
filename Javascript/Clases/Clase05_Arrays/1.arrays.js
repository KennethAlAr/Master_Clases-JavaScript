const colores = ["rojo", "amarillo", "verde", "azul"];

//ACCEDER
//POSICIONES -> INDICES -> INDEX
console.log(colores[0]);
//LONGITUD
console.log(colores.length);

//SOBREESCRIBIR VALORES LLAMANDO A SUS POSICIONES
colores[0] = "negro";
console.log(colores);

//MÉTODOS QUE MODIFICAN EL ARRAY ORIGINAL
colores.push("blanco", "rojo"); //Añade uno o varios elementos al final del array y devuelve el nuevo lenght.
console.log(colores);
colores.pop(); //Elimina el último elemento del array y lo devuelve.
console.log(colores);
colores.unshift("morado"); //Añade uno o varios elementos al frente del array y devuelve el nuevo lenght.
console.log(colores);
colores.shift(); //Elimina el primer elemento del array y lo devuelve.
console.log(colores);
colores.sort(); //Ordena alfabéticamente (ojo con los números que también los ordena alfabéticamente)
console.log(colores);
colores.reverse(); //Invierte el orden del array
console.log(colores);
colores.splice(1, 3, "rosa") //Elimina uno o varios elementos de la lista según su posición. El primer argumento es la posición del primer elemento y el segundo argumento es el número de posiciones que queremos borrar. Si ponemos un tercer elemento, este sustituye los elementos eliminados.
console.log(colores);

//MÉTODOS DE CONSULTA
console.log(colores.indexOf("amarillo")); //Busca la posición de un elemento por su índice. Si el elemento no existe el índice es -1.
console.log(colores.includes("rojo")); //Devuelve un boolean si el elemento está o no dentro del array.
colores.push("rojo", "azul", "negro");
console.log(colores)
console.log(colores.slice(2, 4)) //Devuelve elementos dentro de una lista, el primer argumento es el primer índice que queremos ver y el segundo argumento es el último no incluído.

//CONCAT
const juegosRetro = ["Mario Bros", "Tetris", "Arkanoid"];
const juegosNuevos = ["Elden Ring", "Death Stranding", "GTA VI"];
const juegos = juegosRetro.concat(juegosNuevos);
console.log(juegos);

//Ejemplo -> Quitar Elden Ring
juegos.splice(juegos.indexOf("Elden Ring"), 1);
console.log(juegos);

const arrayPsicopata = [1, 2, [3, 4, [5, 6, [7, 8]]]]
console.log(arrayPsicopata[2][1]);
console.log(arrayPsicopata.flat(4)); //Convierte un array con varios niveles a un array plano.