// 20. Suponga que tiene usted una tienda y desea registrar las ventas en su computadora. 
// Diseñe un algoritmo que lea por cada cliente, el monto total de su compra. 
// Al final del día que escriba la cantidad total de ventas y el número de clientes atendidos.

const promptSync = require('prompt-sync')
const chalk = require('chalk')
let ps = promptSync()

let compradores = [
    { nombre: 'americo celsius', 
        compra: [{
            item: 'Camisa',
            precio: 10300
        },
        {
            item: 'Pantalón',
            precio: 21000,
        },
        {
            item: 'Zapatillas',
            precio: 50800,
        },
    ],
    Total: 82100,
},
{ 
    nombre: 'juan baptor',
    compra: [{
        item: 'Camisa',
        precio: 13456,
    },
    {
        item: 'Pantalón',
        precio: 24320,
    },
    {
        item: 'Zapatillas',
        precio: 76544,
    },
],
Total: 114320,
},
{ 
    nombre: 'roberto alvino',
    compra: [{
        item: 'Camiseta',
        precio: 18856,
    },
    {
        item: 'Pantalón',
        precio: 31220,
    },
    {
        item: 'Zapatos',
        precio: 66594,
    },
],
Total: 116670,
},
{
    nombre: 'maria parlatutti',
    compra: [{
        item: 'Camiseta',
        precio: 23567,
    },
    {
        item: 'Pantalón',
        precio: 85678,
    },
    {
        item: 'botines',
        precio: 123456,
    },
],
Total: 133001,
}
]

const agregarVenta = () => {
    const nombreCliente = ps(chalk.greenBright('Ingrese el nombre del cliente: ---> ')).toLowerCase()
    const productoCompraA = ps(chalk.cyanBright('Ingrese el nombre del producto: ---> '))
    const montoCompraA = parseFloat(ps(chalk.magentaBright('Ingrese el monto de la compra: ---> ')))
    const productoCompraB = ps(chalk.cyanBright('Ingrese el nombre del producto: ---> '))
    const montoCompraB = parseFloat(ps(chalk.magenta(' Ingrese el monto de la compra: ---> ')))
    const productoCompraC = ps(chalk.cyanBright('Ingrese el nombre del producto: ---> '))
    const montoCompraC = parseFloat(ps(chalk.magentaBright(' Ingrese el monto de la compra: ---> ')))
    const montoTotal = montoCompraA + montoCompraB + montoCompraC
    compradores.push({
        nombre: nombreCliente,
        compra: [{
            item: productoCompraA, 
            precio: montoCompraA, 
        },
        {
            item: productoCompraB, 
            precio: montoCompraB,
        },
           {
            item: productoCompraC, 
            precio: montoCompraC,
           }],
        Total: montoTotal,
    })
    }

console.log(chalk.bgYellowBright('----------------------------------------------------------------'))
console.log(chalk.bgYellowBright('< --------- Bienvenido a la app para registrar ventas. ----------->'))
console.log(chalk.bgYellowBright('----------------------------------------------------------------'))

for(let index = 0; index < 2; index++){

const respuesta = ps(chalk.bgGreenBright('¿Desea agregar otro cliente? (S/N) ---> '))
if (respuesta.toUpperCase() === 'N') {
    break;
}
if(respuesta.toUpperCase() === 'S'){
    index = index - 1;
    agregarVenta();
}
if(respuesta.toUpperCase() !== 'S' && respuesta.toUpperCase() !== 'N'){
    console.log(chalk.redBright('Respuesta invalida, por favor ingrese S o N '))
    index = index - 1;
    continue;
}

}


const compradoresDatosPlanos = compradores.flatMap(comprador => {
    return comprador.compra.map(compra => ({
        nombre: comprador.nombre,
        item: compra.item,
        precio: compra.precio,
        Total: comprador.Total
    }));
});


console.table(compradoresDatosPlanos)


const totalVentasDelDia = compradores.reduce((total, comprador) => total + comprador.Total, 0);
const numeroDeClientes = compradores.length;


console.log(chalk.bgBlueBright('---------------------------------------------------------'));
console.log(chalk.bgBlueBright('< ------ Resumen del día: Ventas y Clientes. ------>'));
console.log(chalk.bgBlueBright('---------------------------------------------------------'));

console.log(chalk.yellowBright(`Total de ventas realizadas: $${totalVentasDelDia}`));
console.log(chalk.yellowBright(`Número de clientes atendidos: ${numeroDeClientes}`));