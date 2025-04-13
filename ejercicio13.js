// 13. Escribir un programa que lea valores enteros hasta que se introduzca un 0 y calcule la media de los
// positivos y la media de los negativos

const promptSync = require('prompt-sync');
const chalk = require('chalk')
let ps = promptSync();

const positivosArray = []
const negativosArray = []
let sumaPositivos = 0
let sumaNegativos = 0
let mediaPositivos
let mediaNegativos

let vueltas = 0

do{

    let num = parseInt(ps('Introduce un número entero ( Positivo o Negativo ): '))
    if(num === 0) {
         break;
    }
    if(num > 0) {
        positivosArray.push(num)
        sumaPositivos += num
    }
    if(num < 0){
        negativosArray.push(num)
        sumaNegativos += num
    }
    
vueltas++


}while(vueltas < 10)



    mediaPositivos = sumaPositivos / positivosArray.length
    mediaNegativos = sumaNegativos / negativosArray.length

    
    if(isNaN(mediaNegativos) && isNaN(mediaPositivos)){
    console.log(chalk.redBright(`NO INGRESÓ NÚMEROS POSITIVOS NI NEGATIVOS!!!!!`))
    } else if (isNaN(mediaNegativos)) {
        console.log(chalk.greenBright('Los números positivos ingresados fueron ' + positivosArray))
        console.log(chalk.redBright('No se ingresaron números negativos.'))
        console.log(chalk.bgGreenBright(`La media de los positivos es ----> ${mediaPositivos}`))
    } else if (isNaN(mediaPositivos)) {
        console.log(chalk.yellowBright('Los números negativos ingresados fueron ' + negativosArray))
        console.log(chalk.redBright('No se ingresaron números positivos.'))
        console.log(chalk.bgYellowBright(`La media de los negativos es ----> ${mediaNegativos}`))
    } else {
    console.log(chalk.greenBright('Los números positivos ingresados fueron ' + positivosArray))
    console.log(chalk.yellowBright('Los números negativos ingresados fueron ' + negativosArray))
    console.log(chalk.bgGreenBright(`La media de los positivos es ----> ${mediaPositivos}`))
    console.log(chalk.bgYellowBright(`La media de los negativos es ----> ${mediaNegativos}`))
   }
    

    


