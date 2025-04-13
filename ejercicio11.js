// 11. Calcular el factorial de 10 números diferentes cuyos valores se leen.


const prompt = require('prompt-sync')
const ps = prompt()
const chalk = require('chalk')

let i = 0

function factorialRecursivo(n) {
    if (n === 0) {
      return 1; // Caso base: 0! = 1
    } else {
      return n * factorialRecursivo(n - 1); // Llamada recursiva
    }
  }

do{
const nuM = parseInt(ps(`Escribe un número para calcular el factorial: `))
console.log(factorialRecursivo(nuM));
i++
if(i === 9){
    break;
}

}while(true )

console.log(chalk.bgBlueBright('Se cierra la aplicación!!!              '))