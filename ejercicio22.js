// 22. Calcular la nota promedio de un salón de clase y la nota mayor y el código del estudiante
// que la obtuvo, validar que las notas ingresadas se encuentren en el intervalo [0,10]. El
// ingreso de notas finaliza a pedido del operador.

const prompt = require('prompt-sync')()

let mayorNota = Number.MIN_SAFE_INTEGER

let codMejorEstudiante = 0

let sumaNotas = 0

let cantidadNotas = 0

let opcion = 'S'

let nota = 0

let codAlumno

do {

    do{
    nota = Number(prompt('Ingrese una nota: '))
    }while (nota < 0 || nota > 10)
    
        codAlumno = Number(prompt('Ingrese el código del alumno: '))

        if(nota > mayorNota){
            mayorNota = nota
            codMejorEstudiante = codAlumno
        }
    
    sumaNotas += nota
    cantidadNotas += 1
    opcion = prompt('¿Desea ingresar más notas? S / N ---->  ')

}while(opcion[0].toUpperCase() === 'S')

const resultado = sumaNotas / cantidadNotas

console.log(`La mayor nota ingresada fué: ${mayorNota}`)
console.log(`El código del estudiante que la obtuvo es: ${codMejorEstudiante}`)
console.log(`La nota promedio del salón es: ${resultado}`)
