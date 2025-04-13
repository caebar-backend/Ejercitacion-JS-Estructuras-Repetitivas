// 16. En 1994 el país A tiene una población de 25 millones de habitantes y el país B de 19.9 millones. Las
// tasas de crecimiento de la población son de 2% y 3% respectivamente. Desarrollar un algoritmo para
// informar en que año la población del país B supera a la de A.



const tasaCrecimientoPaisA = 2
const tasaCrecimientoPaisB = 3

let contador = 1994
let paisA = 25000000
let paisB = 19900000


do{

contador++
const crecimientoPaisA = (paisA * 2) / 100
const crecimientoPaisB = (paisB * 3) / 100
paisA = paisA + crecimientoPaisA
paisB = paisB + crecimientoPaisB

}while (paisA > paisB)

console.log('En el año ' + contador + ' la población del país B supera a la del país A')

