// 19. Ingrese un valor numérico correspondiente a un mes y a continuación muestre todos los meses en
// letras que restan para llegar a diciembre del mismo año (por ejemplo, si ingresa 10 debe mostrar
// octubre, noviembre y diciembre). Validar que se ingrese un número de mes válido y el proceso
// finaliza cuando el operador ingresa el valor cero. Muestre también los valores correctos e
// incorrectos ingresados por el usuario.



const promptSync = require('prompt-sync')
const chalk = require('chalk')
let ps = promptSync()

let pregunta
let respuesta
let usuarioErrores

const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
let mesesSeleccionados

console.log(chalk.bgYellow('<---------------------- Aplicación sobre los meses del año -------------------->'))
console.log(chalk.bgYellowBright('| 1 - Enero | 2 - Febrero | 3 - Marzo | 4 - Abril | 5 - Mayo | 6 - Junio |' + '\n' + '| 7 - Julio | 8 - Agosto | 9 - Septiembre | 10 - Octubre | 11 - Noviembre | 12 - Diciembre |'))

do {

const mostrarMeses =() => {

pregunta = ps('Escriba un número de mes: ')

if(isNaN(pregunta)){
    usuarioErrores = pregunta
    console.log(chalk.bgRed('Error: Debe ingresar un número.'))
    console.log(chalk.bgRed(`Valor incorrecto: ${usuarioErrores}`))
    respuesta = ""
    mostrarMeses()
} else if (pregunta > 12){
    usuarioErrores = pregunta
console.log(chalk.bgRed('Error: Debe ingresar un número entre 1 y 12...'))
console.log(chalk.bgRed(`Valor incorrecto: ${usuarioErrores}`))
respuesta = ""
mostrarMeses() } else {
    respuesta = parseInt(pregunta)
    validarMes()
}

function validarMes() {

switch(respuesta){
    case 1: 
    mesesSeleccionados = meses.slice(pregunta -1, 12)
    console.log(chalk.greenBright(mesesSeleccionados))
    break;

    case 2:
    mesesSeleccionados = meses.slice(pregunta - 1, 12)
    console.log(chalk.blueBright(mesesSeleccionados))

    break;

    case 3:
    mesesSeleccionados = meses.slice(pregunta - 1, 12)
    console.log(chalk.magentaBright(mesesSeleccionados))

    break;

    case 4:
    mesesSeleccionados = meses.slice(pregunta - 1, 12)
    console.log(chalk.yellowBright(mesesSeleccionados))
    
    break;

    case 5:
    mesesSeleccionados = meses.slice(pregunta - 1, 12)
    console.log(chalk.gray(mesesSeleccionados))
    
    break;

    case 6: 
    mesesSeleccionados = meses.slice(pregunta - 1, 12)
    console.log(chalk.cyanBright(mesesSeleccionados))
    
    break;

    case 7: 
    mesesSeleccionados = meses.slice(pregunta - 1, 12)
    console.log(chalk.greenBright(mesesSeleccionados))
    
    break;

    case 8:
    mesesSeleccionados = meses.slice(pregunta - 1, 12)
    console.log(chalk.blueBright(mesesSeleccionados))
    
    break;

    case 9:
    mesesSeleccionados = meses.slice(pregunta - 1, 12)
    console.log(chalk.magentaBright(mesesSeleccionados))
    
    break;

    case 10:
    mesesSeleccionados = meses.slice(pregunta - 1, 12)
    console.log(chalk.yellowBright(mesesSeleccionados))

    break;

    case 11:
    mesesSeleccionados = meses.slice(pregunta - 1, 12)
    console.log(chalk.gray(mesesSeleccionados))
    
    break;

    case 12:
    mesesSeleccionados = meses.slice(pregunta - 1, 12)
    console.log(chalk.cyanBright(mesesSeleccionados))
    
    break;

}
}

}

mostrarMeses()


}while(pregunta > 0)


console.log(chalk.bgYellow('FINALIZÓ LA APLICACIÓNNNNNNNNNNNNN!!!!!!!!!!!!!!')) 



