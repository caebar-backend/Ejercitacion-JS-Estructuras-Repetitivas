// Ejercicio 10
// Imprimir los 100 primeros números de Fibonacci. Recuerde que un número de Fibonacci se calcula
// como la suma de los dos anteriores así: 0, 1, 1, 2, 3, 5, 8, 13...


let i = 0
let y = 1
let fibonacciArray = []
let resultado
let z = ' -- Valor1 + Valor2  =  Resultado --> '

while (true) {
resultado = i + y
fibonacciArray.push({
    senalizacion: z,
    valorUno: i,
    valorDos: y,
    fibonacci: resultado,
})
i++
y++


if (i === 100) {
    break;
}
    
}

console.table(fibonacciArray)