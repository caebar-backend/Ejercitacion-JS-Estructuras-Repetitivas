// Ejercicio 3
// Imprimir un listado con los números del 1 al 100 cada uno con su respectivo cuadrado

const prompt = require('prompt-sync')
const ps = prompt()

const chalk = require('chalk')

const pregunta = ps(`Indique si desea acceder a ver un listado de números del 1 al 100 con sus respectivos cuadrados (proceder / salir): `)

const respuesta = pregunta.toLowerCase()

switch (respuesta) {
    case 'proceder':
        console.log(chalk.bgBlue('Listado de números del 1 al 100 con sus respectivos cuadrados....'))
        for(let i = 0; i <= 100; i++){
            console.log(chalk.yellowBright(`${i} ^ 2 = ${i * i}`))
        }
        break;
        case 'salir': 
        console.log(chalk.bgRed('Hasta luego...'))
        return;
        default:
            console.log(chalk.redBright('Opción no válida... vuelva a iniciar la app!!!'))
            break;
      
}