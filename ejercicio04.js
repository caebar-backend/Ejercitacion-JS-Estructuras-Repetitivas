// Ejercicio 4
// Imprimir un listado con los números impares desde 1 hasta 999 y seguidamente otro listado con los
// números pares desde 2 hasta 1000

const chalk = require("chalk");

const impares = [];
const pares = [];
let i
let v = 2

for(i = 1; i <= 999; i++){
    const cuenta = parseInt(i % 2);
    if(cuenta !== 0){
       impares.push(i);
    }
}



while(v <= 1000) {
    const cuenta = parseInt(v % 2);
    if(cuenta === 0) {
    pares.push(v);
    }
    v++
}

console.log(chalk.bgGray(`En esta app se va a imprimir un lista con los números impares y pares!\n`))
console.log(chalk.greenBright(`Los números impares del 1 al 999 son: ${impares}\n`))
console.log(chalk.cyanBright(`Los dígitos pares desde el 2 al 1000: ${pares}\n`))
