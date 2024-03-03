//Función: sumaTres
/*var sumaTres = (x) => {
    return x + 3;
  }

  //Función: cuidadoConElConsoleLog
function cuidadoConElConsoleLog(nombre) {
    console.log(nombre);
    return nombre;
  }

  //Precedencia de valores
var a = 1;
var b = 2;
var c = a = b;
console.log (c); */



// asi se ejecuto en clase
/*function: es una palabra al inicio de la declaracion, indica que lo siguiente es una funcion
sumaTres es el nombre de la funcion
(x) aes un argumento o parametro
{} este es el cuerpo de la funcion, o sea que debe imprimir en la coonsola el valor de x + 3 y debe imprimirlo por el conselo.log*/

function sumaTres(x) {
    console.log(x+3);
}

sumaTres(5);

//Uso del return PRIMERO

function sumaTres(x) {
    return x+3;
}

//se guarda la funcion dentro de una variable SEGUNDO

var sumaTres = function (x) {
    return x + 3;
}

//TERCERO se llama funcion de flecha devido al simbolo =>

var sumaTres = (x) => {
    return x + 3;
}

/* las 3 funciones declaran lo mismo
*/
