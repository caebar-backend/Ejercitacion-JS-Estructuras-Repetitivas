// 21. Se ofrece un trabajo que pague un centavo en la primera semana y dobla su salario cada semana, es decir, $0.01 la primera semana; $0.02 la segunda semana; $0.04 la tercera semana;
// $(2^n-1)/100 la n-ésima semana. Determine el salario por cada semana y el salario pagado hasta la fecha por espacio de n semanas.

const prompt = require('prompt-sync')();

let salario = 0.01
let salarioTotal = 0
const semanas = parseInt(prompt('Ingrese la cantidad de semanas: '))

for (let i = 1; i <= semanas; i++){
    console.log(`semana N°: ${i}`)
    salario = (2 ** i - 1)/100
    console.log(`Salario de la semana N°${i}: $${salario}`)
    salarioTotal += salario
    console.log(`Salario total hasta la fecha: $${salarioTotal}`)
}