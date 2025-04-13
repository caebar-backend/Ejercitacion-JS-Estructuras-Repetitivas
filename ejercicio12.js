// 12. Leer 20 números y encontrar el mayor y el menor valor leídos.

const promptSync = require('prompt-sync');
const chalk = require('chalk')
let ps = promptSync();

const arrayNumeros = []
let ingresos 

console.log(chalk.bgBlueBright(` Ingrese 20 números, positivos y enteros, para encontrar el mayor y el menor valor entre ellos... `))
for (let i = 0; i < 20; i++) {
ingresos = parseInt(ps(`Escriba los números: `))
arrayNumeros.push(ingresos)
}

console.log(chalk.yellowBright('Los números ingresados fueron: '+ arrayNumeros))

console.log(chalk.greenBright(`El mayor valor ingresado es: ${Math.max(...arrayNumeros)}`))
console.log(chalk.blueBright(`El menor valor ingresado es: ${Math.min(...arrayNumeros)}`))