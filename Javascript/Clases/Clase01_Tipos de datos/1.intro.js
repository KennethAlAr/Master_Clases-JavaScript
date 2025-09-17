//let const
//SCOPE GENERAL
let name = "Hades";
name = "Byron";

const movie = "The Evil Dead";

if(true){
    //SCOPE DE BLOQUE
    console.log(name);
    let x = 10;
}

//En este caso la 'x' está fuera del scope y no lo lee.
//console.log(x)

//En let se puede reasignar el valor. En const no se puede modificar el valor.