// Ejercicio 7
// Realizar la operación de potenciación (a^b), de dos valores enteros positivos, con multiplicaciones.

const prompt = require('prompt-sync')
const ps = prompt()

let i

let resultadoAxB


let NumerosArray = []


for(i=0; i <= 5; i++){
 
let a = parseInt(ps('Ingrese el primer valor numérico (base): '))
let b = parseInt(ps('Ingrese el segundo valor numérico (exponente): '))
7
resultadoAxB = a ** b
NumerosArray.push({
    base: a,
    exponente: b,
    resultado: resultadoAxB})

if(i == 5){
    break;
}

}

console.log('Resultados de lo calculos realizados: ' + '\n')
console.table(NumerosArray)



