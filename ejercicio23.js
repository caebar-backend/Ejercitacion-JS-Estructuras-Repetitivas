// 23. Escribir un programa que vaya pidiendo al usuario valores enteros hasta que introduzca un valor negativo, después debe indicar los 3 valores mayores. Por ejemplo, si el usuario introduce los números: 1, 34, 45, 3, 2, 10, 9, 8, 78, 55, 3, 78, 43 y -5, el programa deberá mostrar: 78, 55, 45.
// Nótese que en el ejemplo el valor 78 aparece dos veces, pero solo se considera una vez entre los tres mayores. Es decir, los valores máximos repetidos únicamente se tienen en cuenta una vez. El orden en el que aparezcan los 3 valores máximos es irrelevante. Aunque en el ejemplo salgan ordenados de mayor a menor, al revés o sin orden también es correcto. Si el usuario introduce menos de tres valores el programa sólo mostrará como mayores los que se han introducido. Por ejemplo, si el usuario introduce: 3, 78, -5, la solución será: 3, 78.
const prompt = require('prompt-sync')()
let mayor1 = Number.MIN_SAFE_INTEGER
let mayor2 = Number.MIN_SAFE_INTEGER
let mayor3 = Number.MIN_SAFE_INTEGER

let numero

let primeraVez = true

do{
numero = Number(prompt('Ingrese un número positivo ( o negativo para finalizar ): '))
if (numero < 0){
break;
}
if (!mayor1){
mayor1 = numero 
} else if (!mayor2){
    mayor2 = numero
} else if (!mayor3){
    mayor3 = numero
}

if(numero === mayor1 || numero === mayor2 || numero === mayor3){
    continue;
}

if(numero > mayor1){
    mayor1 = numero
} else if (numero > mayor2){
    mayor2 = numero
} else if (numero > mayor3){
    mayor3 = numero
}

}while(numero >= 0)

console.log('Los tres mayores son: ')
if(mayor1) console.log(mayor1)
if(mayor2) console.log(mayor2)
if(mayor3) console.log(mayor3)