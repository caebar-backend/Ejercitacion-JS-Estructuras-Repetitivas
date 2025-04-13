// Ejercicio 6
// Realizar la división entera a/b de dos valores enteros positivos mediante restas.

const prompt = require('prompt-sync')();

function divisionRecursiva(dividendo, divisor, tolerancia = 0.0001) {
   
    if (dividendo <= 0 || divisor <= 0) {
        return "Ambos números deben ser positivos";
    }
    
    let proceso = [];
    
    function dividir(valor) {
        let cociente = 0;
        let resto = valor;
        
        
        while (resto >= divisor) {
            resto -= divisor;
            cociente++;
        }
        
        proceso.push({
            valorInicial: valor,
            cociente: cociente,
            resto: resto
        });
        
        
        if (resto > tolerancia && cociente !== 0) {
            dividir(cociente); 
        }
    }
    
    dividir(dividendo);
    return proceso;
}

// Ejemplo de uso:

const a = parseInt(prompt('Introduce el valor de a (dividendo): '));
const b = parseInt(prompt('Introduce el valor de b (divisor): '));

const resultado = divisionRecursiva(a, b);
console.log("Proceso completo:");
resultado.forEach((paso, i) => {
    console.log(`Paso ${i + 1}: Dividiendo ${paso.valorInicial}/${b} → Cociente: ${paso.cociente}, Resto: ${paso.resto}`);
});

