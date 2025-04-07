// Ejercicio 2
// Realizar la multiplicación de dos números enteros A y B mediante sumas sucesivas, hacer tres
// algoritmos con cada estructura repetitiva.


const promptSync = require('prompt-sync')
const chalk = require('chalk')
let prompt = promptSync()

let resultado = 0

let preguntaInicial 
let respuestaInicial
let replicaPrimaria

contadorDoWhileForWhile = 0


//--------------------------------------------------------
// Bucle FOR ---------------------------------

function bucleFor(){
 salirDelBucleFor: for(contadorDoWhileForWhile; contadorDoWhileForWhile >= 0; ){
    
    const numeroA = parseInt(prompt('Ingrese el primer número: '))
     if(isNaN(numeroA)) {
        console.log(chalk.red('Error, el valor ingresado no es un número'))
        continue;
        }

    const numeroB = parseInt(prompt('Ingrese el segundo número: '))
     if(isNaN(numeroB)) {
        console.log(chalk.red('Error, el valor ingresado no es un número'))
        continue;
        }
     

    const multiplicacion = numeroA * numeroB
    resultado += multiplicacion
    
    console.log(`Resultado parcial de la operación ---> ${resultado}`)

    contadorDoWhileForWhile++

    
    if(contadorDoWhileForWhile === 5){
    const respuestaEnBucleFor = prompt('¿Desea continuar con la operación? (si / no) ')
     const opcion = respuestaEnBucleFor.toLowerCase()
     switch(opcion){
        case 'si':
            contadorDoWhileForWhile = 0
            continue;
        case 'no':
                console.log(chalk.green('La operación ha sido finalizada'))
                break salirDelBucleFor;

        default:
                console.log(chalk.red('Error, la respuesta ingresada no es válida, continuamos con la ejecución de la aplicación!.'))
                contadorDoWhileForWhile = 0
                continue ;

     }
     
}

}

console.log(chalk.yellow(`-------------------------------------------------------------`))
console.log(chalk.bgGrey(`Resultado Final de la operación con el bucle ${preguntaInicial}  ---> ${resultado}`))
console.log(chalk.yellow(`-------------------------------------------------------------`))


}
// FIN BUCLE FOR ----------------------------------------------------
// ------------------------------------------------------------------

// ------------------------------------------------------------------
// BUCLE WHILE --------------------------------------------------------
function bucleWhile() {
salirDelBucleWhile: while(true){

    const numeroA = parseInt(prompt('Ingrese el primer número: '))
     if(isNaN(numeroA)) {
        console.log(chalk.red('Error, el valor ingresado no es un número'))
        continue;
        }

    const numeroB = parseInt(prompt('Ingrese el segundo número: '))
     if(isNaN(numeroB)) {
        console.log(chalk.red('Error, el valor ingresado no es un número'))
        continue;
        }
     
    const multiplicacion = numeroA * numeroB
    resultado += multiplicacion
    
    console.log(`Resultado parcial de la operación ---> ${resultado}`)

    contadorDoWhileForWhile++

    if(contadorDoWhileForWhile === 5){
        const respuestaEnBucleFor = prompt('¿Desea continuar con la operación? (si / no) ')
        const opcion = respuestaEnBucleFor.toLowerCase()
        switch(opcion){
           case 'si':
               contadorDoWhileForWhile = 0
               continue;
           case 'no':
                   console.log(chalk.green('La operación ha sido finalizada'))
                   break salirDelBucleWhile;
   
           default:
                   console.log(chalk.red('Error, la respuesta ingresada no es válida, continuamos con la ejecución de la aplicación!.'))
                   contadorDoWhileForWhile = 0
                   continue;
   
        }
}
}
console.log(chalk.yellow(`-------------------------------------------------------------`))
console.log(chalk.bgGrey(`Resultado Final de la operación con el bucle ${preguntaInicial}  ---> ${resultado}`))
console.log(chalk.yellow(`-------------------------------------------------------------`))

}
// FIN BUCLE WHILE ---------------------------------------------------
// ------------------------------------------------------------------

// -------------------------------------------------------------------
//BUCLE DO - WHILE ----------------------------------------------------

function bucleDoWhile() {
 salirDelBucleDoWhile:   do {
    const numeroA = parseInt(prompt('Ingrese el primer número: '))
     if(isNaN(numeroA)) {
        console.log(chalk.red('Error, el valor ingresado no es un número'))
        continue;
        }

    const numeroB = parseInt(prompt('Ingrese el segundo número: '))
     if(isNaN(numeroB)) {
        console.log(chalk.red('Error, el valor ingresado no es un número'))
        continue;
        }
     
    const multiplicacion = numeroA * numeroB
    resultado += multiplicacion
    
    console.log(`Resultado parcial de la operación ---> ${resultado}`)

    contadorDoWhileForWhile++

    if(contadorDoWhileForWhile === 5){
        const respuestaEnBucleFor = prompt('¿Desea continuar con la operación? (si / no) ')
        const opcion = respuestaEnBucleFor.toLowerCase()
        switch(opcion){
           case 'si':
               contadorDoWhileForWhile = 0
               continue;
           case 'no':
                   console.log(chalk.green('La operación ha sido finalizada'))
                   break salirDelBucleDoWhile;
   
           default:
                   console.log(chalk.red('Error, la respuesta ingresada no es válida, continuamos con la ejecución de la aplicación!.'))
                   contadorDoWhileForWhile = 0
                   continue;
   
        }
} 
} while (true);

console.log(chalk.yellow(`-------------------------------------------------------------`))
console.log(chalk.bgGrey(`Resultado Final de la operación con el bucle ${preguntaInicial} ---> ${resultado}`))
console.log(chalk.yellow(`-------------------------------------------------------------`))


}

function preguntaBase() {

    preguntaInicial = prompt('Indique con cuál bucle desea operar en esta app (for / while / do-while)')
    const opcion = preguntaInicial.toLowerCase()
  
    switch(opcion){
        case 'for':
            bucleFor()
            break;
            case 'while':
                bucleWhile()
                break;
                case 'do-while':
                    bucleDoWhile()
                    break;
                    default:
                        console.log(chalk.red('Error, la respuesta ingresada no es válida...'))
                        preguntaBase()
                        break;
    }

    
}

preguntaBase()




