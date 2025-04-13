// Ejercicio 1
// Hacer los algoritmos que calculen el promedio de una serie de notas hasta que se ingrese una nota
// negativa, utilizar las tres estructuras repetitivas.

const promptSync = require('prompt-sync');
const chalk = require('chalk')
let prompt = promptSync();

let contadorWhile = 0
let contadorFor = 0
let contadorDoWhile = 0

let sumaDeNotas = 0

let notas

let promedioWhile
let promedioFor
let promedioDoWhile

let respuesta

// ----------------------------------------------------------
// Bucle WHILE
function bucleWhile(){
while(true){
notas = prompt(chalk.blueBright(`Bucle While: Ingrese una nota a continuación ("EXIT" para salir / nota negativa para abortar cálculo...) ---> `))
if(notas === "EXIT"){
    console.log(chalk.bgRedBright(`Decidió abortar la operación!, no hay promedio final!!`))
    return;
}
if(notas < 0){
    break;
}
if (isNaN(notas)){
    console.log(chalk.red(`Error: Ingrese un valor numérico`))
    continue;
}

sumaDeNotas += parseFloat(notas)
contadorWhile++
}

promedioWhile = sumaDeNotas / contadorWhile
console.log(chalk.green(`El promedio de las notas ingresadas es: ${promedioWhile}`))
}

//-------------------------------------------------------------


//--------------------------------------------------------------
// Bucle FOR
function bucleFor() {
for(contadorFor; contadorFor >= 0;){
    notas = prompt(chalk.blueBright(`Bucle For:  Ingrese una nota a continuación ("EXIT" para salir / nota negativa para abortar cálculo...)---> `))
    
    if (notas === "EXIT"){
        console.log(chalk.bgRedBright(`Decidió abortar la operación!, no hay promedio final!!`))
        return;
    }
    if (notas < 0){
        break;
    }
    if (isNaN(notas)){
        console.log(chalk.red(`Error: Ingrese un valor numérico`))
        continue;
    }

      sumaDeNotas += parseFloat(notas)
      contadorFor++
    
    
}

promedioFor = sumaDeNotas / contadorFor
console.log(chalk.green(`El promedio de las notas ingresadas es: ${promedioFor}`))
}
// ---------------------------------------------------------------


//----------------------------------------------------------------
// Bucle DO-WHILE 
function bucleDoWhile() {
do{
    notas = prompt(chalk.blueBright(` Ingrese una nota a continuación ("EXIT" para salir / nota negativa para abortar cálculo...) ---> `))
    
    if(notas < 0){
        break;
    }
    if(notas === "EXIT"){
        console.log(chalk.bgRedBright(`Decidió abortar la operación!, no hay promedio final!!`))
        return;
    }
    if (isNaN(notas)){
        console.log(chalk.red(`Error: Ingrese un valor numérico`))
        continue;
    }
    sumaDeNotas += parseFloat(notas)
    contadorDoWhile++

}while(true)

promedioDoWhile = sumaDeNotas / contadorDoWhile
console.log(chalk.green(`El promedio de las notas ingresadas es: ${promedioDoWhile}`))
}

//-----------------------------------------------------------------

console.log(chalk.yellow(`App para calcular promedio de notas...`))
console.log(chalk.yellow(`(para terminar la rutina de ingresos escriba EXIT o una nota negativa.)`))
respuesta = prompt(`¿Con cuál bucle deseas calcular? (while, for, do-while): `)
let bucle = respuesta.toLowerCase()

switch (bucle) {
    case "while":
        bucleWhile()
        break;
        case "for":
            bucleFor()
            break;
            case "do-while":
                bucleDoWhile()
                break;
                default:
                    console.log(chalk.red(`Error: Opción no válida`))
                    break;
}