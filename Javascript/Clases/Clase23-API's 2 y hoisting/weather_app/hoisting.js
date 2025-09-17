//El hoisting lee todas las funciones y las pone arriba de todo.

sayHello()

function sayHello(){
    console.log("Hola")
}

//Sin embargo, las funciones flechas no flotan y dan error si se ejecutan antes de definirlas. Eso es a causa de ser const

sayBye()

const sayBye = () => {
    console.log("Adiós")
}