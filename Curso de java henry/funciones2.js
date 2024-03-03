/*Error comun, confundir return con console.log

console.log() = da una ayuda visual que devuelve una linea de codigo*/

var animal = "caballo";
console.log(animal);

/*se debe eliminar despues de utilizarlo */

/* return == es fundamental para toda funcion ya que es la instruccion que va a indicar que valor nos deve devolver*/

function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;    
}

function otraFuncion() {
    return ( "El nombre retornado por la funcion 'cuidadoConElConsoleLog es: cuidadoConElConsoleLog('Camilo')");

}

function cuidadoConElReturn (nombre) { 
    return nombre;
    console.log(nombre); //todo lo que se encuentra por debajo del return, no se va a a retornar

}

//CONSOLE.LOG ES SOLO PARA AYUDARNOS A LA HORA DE PROGRAMAR