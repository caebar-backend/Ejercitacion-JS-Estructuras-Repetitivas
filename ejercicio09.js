// Ejercicio 9
// Imprimir los números de 1 a N (siendo N un número que se lee) cada uno con su respectivo factorial. 

const prompt = require('prompt-sync')
const ps = prompt()

function calcularFactorial(num) {
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    return factorial;
}

const N = parseInt(ps("Ingrese un número N:   ->>  "));

if (isNaN(N) || N < 1) {
    console.log("Por favor ingrese un número válido mayor que 0");
} else {
    console.log(`Números del 1 al ${N} con sus factoriales:`);
    for (let i = 1; i <= N; i++) {
        console.log(`${i}! = ${calcularFactorial(i)}`);
    }
}