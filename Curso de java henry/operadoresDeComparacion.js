// operadores de comparacion
// se utilizan los siguientes opereadores
// < Menor, > mayor, <= menor o igual, >= mayor  o igual y == la igualdad que se representa con dos signos de igual
// != distinto del operador
// estos operadores de operacion devuelven un valor booleano el cual indica la respuesta de la opeacion
// ya sea true  o false

//Operaciones de comparación
console.log (4 < 7); 
console.log (4 < 1 );
console.log (4 > 4); 
console.log (4 == 7);

//Igualdad vs igualdad estricta 

// asignacion =
// igualdad == y ===
// "3" es un string
// === igualdad estricta (verifica el tipo de dato y el valor del mismo)
// == igualdad (solo determina el valor)

console.log (3 == 3); 
console.log (3 === 3); 
console.log (3 == "3"); //abstract equality comparison, el algoritmo lo interpreta como 3 y no como string por alcance de datos
console.log (3 === "3");
console.log (7 == "7");
console.log (7 === "7");

//Asignación y asociatividad
//asociatividad se identifica que operacion se afirma primero, de derecha a izquierda, la primera seria a = b y luego c = a 
var a = 1;
var b = 2;
var c = a = b;
console.log (c);