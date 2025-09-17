//Dado el siguiente array:
const aldeanos = ["Fibrilio", "Narciso", "Vacarena", "Tendo", "Nendo"];
//4.1 - Saca a "Tendo" por consola atacando su posición.
//4.2 - Coloca en el último lugar de este array a "Cervasio".
//4.3 - Cambia el primer elemento de este array por "Bambina".
//4.4 - Dale la vuelta a este array.
//4.5 - Cambia a "Narciso" por "Canela" haciendo uso de un método de array.
//4.6 - Imprime por consola el último elemento de este array sin atacar a la posición explicitamente
// Pista: puedes usar el método length con algo más para ello.

console.log(aldeanos[3]);
aldeanos.push("Cervasio");
console.log(aldeanos);
aldeanos[0] = "Bambina";
console.log(aldeanos);
aldeanos.reverse();
console.log(aldeanos);
aldeanos[aldeanos.indexOf("Narciso")] = "Canela";
console.log(aldeanos);
console.log(aldeanos[aldeanos.lenght-1]);