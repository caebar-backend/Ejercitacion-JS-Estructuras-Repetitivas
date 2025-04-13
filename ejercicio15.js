// 15. Escribir un programa que lea números enteros de teclado hasta que encuentre uno que cumpla las
// siguientes condiciones:
// • Múltiplo de 2.
// • No múltiplo de 5.
// • Mayor que 100.
// • Menor que 10.000.

const promptSync = require('prompt-sync')
const chalk = require('chalk')
let ps = promptSync()
let numeroSecreto 

console.log('Ingrese números enteros, entre 100 y 10.000, para encontrar el número que cumple las condiciones secretas!!!')

do {
const num = parseInt(ps('Ingrese un número entero: '))
if(num > 100 && num < 10001 && num % 2 === 0 && num % 5 !== 0){
    numeroSecreto = num
    break;
}else if (isNaN(num)){
    console.log(chalk.red('Error: Ingrese un número entero.'))
}else if(num < 100){
    console.log(chalk.yellowBright('Error: El número debe ser mayor que 100.'))
}else if(num < 10000){
    console.log(chalk.yellowBright('Error: El número debe ser menor que 10.000.'))
}else{
    console.log(chalk.red('El número ingresado no cumple con las condiciones secretas!!!'))
    continue;
}

} while(true)

console.log(chalk.bgYellowBright('Éste número cumple con las condiciones secretas ----> ' + chalk.bgCyanBright(numeroSecreto)))