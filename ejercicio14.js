// 14. Leer 10 valores desde teclado y mostrar la media de los pares y la media de los impares. Hacer tres
// versiones, con un bucle: para, mientras y repetir. Repetir el ejercicio considerando que el número de
// valores se le solicita al usuario.

const promptSync = require('prompt-sync')
const chalk = require('chalk')
let ps = promptSync()

const numerosArray = []

console.log(chalk.blueBright(`A continuación se le va a pedir que escriba 10 números, para luego mostrar la media de los pares y la media de los impares`))

do {
const numeros = parseInt(ps('Ingrese un número -------->  '))
if (numeros > 0) {
    numerosArray.push(numeros)
}
if (isNaN(numeros)){
    console.log(chalk.redBright('Error, no es un número lo que ingresó'))
    continue;
}
if (numeros === 0 || numeros < 0){
    console.log(chalk.redBright('Error, no se pueden ingresar 0 o valores negativos'))
    continue;
}
} while (numerosArray.length < 10)

console.log(chalk.green('\n' + 'Los números ingresados fueron: ' + numerosArray))

const numerosPares = numerosArray.filter((num) => {
    return num % 2 === 0
})

const numerosImpares = numerosArray.filter((num) => {
    return num % 2 !== 0
})

const sumaPares = numerosPares.reduce((acumulador, numero) => acumulador + numero, 0)
const sumaImpares = numerosImpares.reduce((acumulador, numero) => acumulador + numero, 0)

const mediaPares = sumaPares / numerosPares.length
const mediaImpares = sumaImpares / numerosImpares.length

console.log('--------------------------------------------------------------')
console.log(chalk.yellow('Los Números pares fueron: \n' + numerosPares))
console.log(chalk.yellow('La media de los números pares es: \n' + mediaPares))
console.log('--------------------------------------------------------------')
console.log(chalk.cyanBright('Los Números impares fueron: \n' + numerosImpares))
console.log(chalk.cyanBright('La media de los números impares es: \n' + mediaImpares))
console.log('--------------------------------------------------------------')


