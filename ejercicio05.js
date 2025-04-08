// Ejercicio 5
// Imprimir los números pares desde N (siendo N un número par que se lee) en forma descendente ?
// hasta 2.
const chalk = require('chalk')
const prompt = require('prompt-sync')
const ps = prompt()

let Narray = []
let doWhileVar = 1
const N = parseInt(ps('Escriba un número desde 1 hasta 1000: '))

do {
doWhileVar % 2 === 0 ? Narray.push(doWhileVar) : ''

doWhileVar++
}
while ( doWhileVar <= N)

const NarrayReverse = Narray.reverse()
console.log(chalk.yellow(`${NarrayReverse}`))


