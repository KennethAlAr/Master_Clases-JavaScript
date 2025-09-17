let precioBaseGlobal = 10000;

//Cambia el precio en esta línea modificando la variable

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Alcón Milenario", precioBase: 70000, precioFinal: 80000};

//Tu código para actualizar el precio final de cada nave aquí...

precioBaseGlobal = 25000;

nave1.precioFinal = precioBaseGlobal + nave1.precioBase;
nave2.precioFinal = precioBaseGlobal + nave2.precioBase;