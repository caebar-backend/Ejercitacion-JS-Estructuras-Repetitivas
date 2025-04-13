// 17. Un ciclista recorre diariamente 200 kilómetros en su práctica competitiva. El atleta solicita un
// algoritmo que le permita registrar el tiempo empleado en cada recorrido, al final del proceso el
// algoritmo debería mostrar el promedio de los tiempos empleados. También necesita saber cuántas
// veces su tiempo fue menor a valor dado y cuál fue su mejor tiempo realizado.


const promptSync = require('prompt-sync')
const chalk = require('chalk')
let ps = promptSync()

const tiempos = []
let inicio 
let sumatoriaDeTiempos = 0
let diaComp = 

console.log(chalk.yellowBright('<--- APLICACION PARA REGISTRAR TIEMPO Y EVALUAR MERITOS EN LA PRACTICA DEPORTIVA --->'))

for(inicio = 1; inicio < 8;){
    const diaIng = ps(chalk.bgCyanBright('Ingrese el día del recorrido (lunes, martes, miercoles, jueves...) ---> '))
    const dia = diaIng.toLowerCase()
    
    if((dia === 'lunes') || (dia === 'martes') || (dia === 'miercoles') || (dia === 'jueves') || (dia === 'viernes') || (dia === 'sabado') || (dia === 'domingo')){
    
        const tiempo = parseFloat(ps('Ingrese el tiempo empleado en el recorrido (en minutos) ---> '))

          if(isNaN(tiempo)){
            console.log(chalk.redBright('Error: El tiempo ingresado no es un número.'))
            continue;
          } else {
            tiempos.push({
                dia: dia,
                minutos: tiempo,
               })
            sumatoriaDeTiempos += tiempo
          }
          
    } else {
        console.log(chalk.red('Día invalido, por favor ingrese un día de la semana válido!!!!!!!!'))
        continue;

    }

    inicio++
    if(inicio > 7){
        break;
    }
}

const promedio = sumatoriaDeTiempos / 7


const preguntaFinal = parseInt(ps(chalk.bgYellowBright('Indique a continuación su tiempo ideal para su recorrido diario ----> ')))

const vecesMenor = tiempos.filter(item => item.minutos < preguntaFinal).length

console.table(tiempos)
console.log(chalk.green('La Sumatoria de tiempos es : ' + sumatoriaDeTiempos + ', y el promedio es : ' + promedio + ' minutos'))
console.log(chalk.cyanBright('El tiempo maximo es : ' + Math.max(...tiempos.map(item => item.minutos)) + ' minutos'))
console.log(chalk.cyan('El tiempo minimo es : ' + Math.min(...tiempos.map(item => item.minutos)) + ' minutos. (El mejor tiempo)'))
console.log(chalk.bgYellowBright('La cantidad de veces que cumplió su objetivo fueron: ' + vecesMenor))
