// 24. Un galpón tiene al comienzo de la jornada una cantidad inicial (Stock inicial) de cajones
// con productos de un solo tipo, luego repetidamente, entran y salen camiones, que traen o
// llevan cantidades de cajones. Si no alcanza la cantidad a llevar, se debe mostrar un mensaje
// “NO ALCANZA”, se lleva todo lo que hay; se muestra lo que se lleva y el galpón queda vacío.
// Se muestra al final de la jornada cuantos cajones hay en el galpón (Stock final), y cuantos
// cajones ingresaron y cuantos cajones salieron en toda la jornada. Ejemplo:

// ┌─────────────┬───────────┬────────────────┬────────────────┐
// │  Movimiento │  Cantidad │  Stock Inicial │  Stock Final   │
// ├─────────────┼───────────┼────────────────┼────────────────┤
// │ Ingreso     │ 10        │ 50             │ 60             │
// │ Egreso      │ 20        │ 60             │ 40             │
// │ Ingreso     │ 15        │ 40             │ 55             │
// │ Egreso      │ 60        │ 55             │ NO ALCANZA     │
// └─────────────┴───────────┴────────────────┴────────────────┘


let prompt = require ('prompt-sync')
const ps = prompt()

const chalk = require('chalk')

let contador = 0

const stockInicial = 1000

const ingreso = 210

const egreso = 130

const stockMasIngreso = stockInicial + ingreso

const stockMasEgreso = stockMasIngreso - egreso

let ingresoI 

let egresoE 

let stockFinalI

let stockFinalE

let stockFinalIE = stockMasEgreso

const pantallaFinalIngresos = () => {
    if(stockFinalIE > 1000000){
        console.log(chalk.bgBlue('DEEBE VENDER PRODUCTOS ANTES DE REALIZAR INGRESOS'))
        movimientosEgresos()
    }else{
    console.log(chalk.bgRedBright(`--------------- APP PARA REGISTRAR MOVIMIENTOS DIARIOS DE UN DEPOSITO ---------------`))
    
    console.log(chalk.blueBright('<------------------------------------------------------------------------>'))
    console.log(chalk.blueBright(' | | MOVIMIENTO  | |  CANTIDAD | |  STOCK DEPOSITO  | |  STOCK FINAL  | |'))
    console.log(chalk.blueBright('<------------------------------------------------------------------------>'))
    console.log(chalk.blueBright(` | | Base/Inicio  |   ${stockFinalI}      |     ${stockFinalI}           |    ${stockFinalI}        | |`))
    console.log(chalk.blueBright('<------------------------------------------------------------------------>'))
    console.log(chalk.blueBright(` | | Ingreso      |   ${ingresoI}      |     ${stockFinalI}           |    ${stockFinalIE}        | |`))
    console.log(chalk.blueBright('<------------------------------------------------------------------------>'))
    console.log(chalk.blueBright(` | | Egreso       |   --------- | ------------------ |    ----------- | |`))
    console.log(chalk.blueBright('<------------------------------------------------------------------------>'))
    
    console.log(chalk.bgRedBright(`---------------------------------------------------------------------- ---------------`))
    
    inicioPregunta()
    }
    }

    const pantallaFinalEgresos = () => {
        if(stockFinalIE < 0){
            console.log(chalk.bgMagenta('DEEBE INGRESAR PRODUCTOS ANTES DE REALIZAR EGRESOS'))
            movimientosIngresos()
        }else{
        console.log(chalk.bgRedBright(`--------------- APP PARA REGISTRAR MOVIMIENTOS DIARIOS DE UN DEPOSITO ---------------`))
        
        console.log(chalk.magentaBright('<------------------------------------------------------------------------>'))
        console.log(chalk.magentaBright(' | | MOVIMIENTO  | |  CANTIDAD | |  STOCK DEPOSITO  | |  STOCK FINAL  | |'))
        console.log(chalk.magentaBright('<------------------------------------------------------------------------>'))
        console.log(chalk.magentaBright(` | | Base/Inicio  |   ${stockFinalI}      |     ${stockFinalI}           |    ${stockFinalI}        | |`))
        console.log(chalk.magentaBright('<------------------------------------------------------------------------>'))
        console.log(chalk.magentaBright(` | | Ingreso      |   --------- | ------------------ |    ----------- | |`))
        console.log(chalk.magentaBright('<------------------------------------------------------------------------>'))
        console.log(chalk.magentaBright(` | | Egreso       |   ${egresoE}      |     ${stockFinalI}           |    ${stockFinalIE}        | |`))
        console.log(chalk.magentaBright('<------------------------------------------------------------------------>'))
        
        console.log(chalk.bgRedBright(`---------------------------------------------------------------------- ---------------`))
        
        inicioPregunta()
        }
        }


const pantallaInicial = () => {
    console.log(chalk.bgRedBright(`--------------- APP PARA REGISTRAR MOVIMIENTOS DIARIOS DE UN DEPOSITO ---------------`))
    
    console.log(chalk.yellowBright('<------------------------------------------------------------------------>'))
    console.log(chalk.yellowBright(' | | MOVIMIENTO  | |  CANTIDAD | |  STOCK DEPOSITO  | |  STOCK FINAL  | |'))
    console.log(chalk.yellowBright('<------------------------------------------------------------------------>'))
    console.log(chalk.yellowBright(` | | Base/Inicio  |   ${stockInicial}      |     ${stockInicial}           |    ${stockInicial}        | |`))
    console.log(chalk.yellowBright('<------------------------------------------------------------------------>'))
    console.log(chalk.yellowBright(` | | Ingreso      |   ${ingreso}       |     ${stockInicial}           |    ${stockMasIngreso}        | |`))
    console.log(chalk.yellowBright('<------------------------------------------------------------------------>'))
    console.log(chalk.yellowBright(` | | Egreso       |   ${egreso}       |     ${stockMasIngreso}           |    ${stockMasEgreso}        | |`))
    console.log(chalk.yellowBright('<------------------------------------------------------------------------>'))
    
    console.log(chalk.bgRedBright(`---------------------------------------------------------------------- ---------------`))
    }

const movimientosIngresos = () => {
    console.log(chalk.bgBlueBright(`---- Ingresos ----- Ingresos ------- Ingresos ---- Ingresos ------- Ingresos -------`))
    const preguntaIngresos = parseInt(ps(chalk.blueBright(`Indique la cantidad de cajones/cajas/productos que ingresaron: ( '0' para 'Salir' y volver a la pantalla principal ) `)))
    if(isNaN(preguntaIngresos)){
        console.log(chalk.red('Error: Debe ingresar un número.'))
    }else if(preguntaIngresos){
           ingresoI = preguntaIngresos
           stockFinalI = stockFinalIE
           stockFinalE = stockFinalI
           stockFinalIE += preguntaIngresos
           pantallaFinalIngresos()
    }else if(preguntaIngresos === 0){
        inicioPregunta()
    }else{
        console.log(chalk.red('Error!!, se cierra la app!!, vuelva a iniciar sesión!!.'))
        return;
    }

}

const movimientosEgresos = () => {
    console.log(chalk.bgMagentaBright(`---- Egresos ------- Egresos ------- Egresos ------ Egresos ------- Egresos -------`))
    const preguntaEgresos = parseInt(ps(chalk.magentaBright(`Indique la cantidad de cajones/cajas/productos que salieron: ( '0' para 'Salir' y volver a la pantalla principal ) `)))
    if(isNaN(preguntaEgresos)){
        console.log(chalk.red('Error: Debe ingresar un número.'))
    }else if(preguntaEgresos){
           egresoE = preguntaEgresos
           stockFinalI = stockFinalIE
           
           stockFinalIE -= preguntaEgresos
           pantallaFinalEgresos()
    }else if(preguntaEgresos === 0){
        inicioPregunta()
    }else{
        console.log(chalk.red('Error!!, se cierra la app!!, vuelva a iniciar sesión!!.'))
        return;
    }
}

const inicioPregunta = () => {
    while(contador < 10){
    let pregunta = parseInt(ps(chalk.greenBright('¿Cuál movimiento desea hacer? ( 1 - Ingresos, 2 - Egresos, 3 - Salir ) ')))
    switch(pregunta){
        case 1:
            movimientosIngresos()
            contador = 16
            break;
            case 2:
                movimientosEgresos()
                contador = 16
                break;
                case 3:
                    console.log(chalk.redBright('¡Hasta luego!'))
                    return;
                    default:
                        console.log(chalk.redBright('Opción no válida'))
                        continue;
    }
}}


pantallaInicial()
inicioPregunta()




