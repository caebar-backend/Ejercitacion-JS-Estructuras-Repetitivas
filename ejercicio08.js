// Ejercicio 8
// Obtener el resto de la división entera a%b de dos números enteros positivos mediante restas.

let prompt = require('prompt-sync')
let ps = prompt()

let resto
let contador = 0
const NumerosArray = []

while (true){
const a = parseInt(ps('Ingrese el primer número entero positivo (dividendo): '))
const b = parseInt(ps('Ingrese el segundo número entero positivo (divisor): '))
resto = a - (Math.floor(a/b) * b)
cociente = Math.floor(a/b)
NumerosArray.push({divisor: a, dividendo: b, cociente: cociente, resto: resto})

if(contador == 5){
    break
}

contador++
}

console.table(NumerosArray)

