// 18. Un censista recopila ciertos datos aplicando encuestas para el último Censo Nacional de Población y
// Vivienda. Desea procesar los datos de todas las personas que alcance a encuestar en un día y
// obtener los porcentajes de estudios de niveles primario, secundario, terciario,
// universitario y de postgrado.

const promptSync = require('prompt-sync')
const chalk = require('chalk')
let ps = promptSync()

let datos = [{
    "nombre" : "juan",
    "apellido": "perez",
    "edad" : 25,
    "estudios" : "primario",
},
{
    "nombre" : "maria",
    "apellido": "lopez",
    "edad" : 30,
    "estudios" : "secundario",
},
{
    "nombre" : "lailan",
    "apellido": "corpez",
    "edad" : 35,
    "estudios" : "terciario",
},
{
    "nombre" : "payam",
    "apellido": "forces",
    "edad" : 40,
    "estudios" : "universitario",
},
{
    "nombre" : "leopoldo",
    "apellido": "queseira",
    "edad" : 55,
    "estudios" : "postgrado",
},
{
    "nombre" : "juan",
    "apellido": "perez",
    "edad" : 25,
    "estudios" : "primario",
},
{
    "nombre" : "mia",
    "apellido": "oquis",
    "edad" : 30,
    "estudios" : "secundario",
},
{
    "nombre" : "nalmai",
    "apellido": "rperto",
    "edad" : 35,
    "estudios" : "terciario",

},
{
    "nombre" : "yamam",
    "apellido": "cescius",
    "edad" : 40,
    "estudios" : "universitario",
},
{
    "nombre" : "korlo",
    "apellido": "poroto",
    "edad" : 65,
    "estudios" : "postgrado",

},
{
    "nombre" : "AI",
    "apellido": "DeepSeek",
    "edad" : 1,
    "estudios" : "postgrado",

},
{
    "nombre" : "AI",
    "apellido": "Copilot",
    "edad" : 4,
    "estudios" : "postgrado",
}
]

let contador = 0

while (contador < 5){
const nombre = ps(chalk.cyanBright('Escriba el nombre de la persona: -----> ')).toLowerCase()
const apellido = ps(chalk.greenBright('Escriba el apellido de la persona: -----> ')).toLowerCase()
const edad = parseInt(ps(chalk.magentaBright('Escriba la edad de la persona: -----> ')))
const estudios = ps(chalk.yellowBright('Escriba los estudios de la persona (primario, secundario, terciario, universitario, postgrado): -----> ')).toLowerCase()
const estudio = estudios.replace(/s+$/, "");
datos.push({
    nombre: nombre,
    apellido: apellido,
    edad: edad,
    estudios: estudio,
})
contador++
}

const estudioPrimario = datos.filter((persona) => persona.estudios === "primario").length
const estudioSecundario = datos.filter((persona) => persona.estudios === "secundario").length
const estudioTerciario = datos.filter((persona) => persona.estudios === "terciario").length
const estudioUniversitario = datos.filter((persona) => persona.estudios === "universitario").length
const estudioPostgrado = datos.filter((persona) => persona.estudios === "postgrado").length


const porcentajePrimario = (estudioPrimario / datos.length) * 100;
const porcentajeSecundario = (estudioSecundario / datos.length) * 100
const porcentajeTerciario = (estudioTerciario / datos.length) * 100
const porcentajeUniversitario = (estudioUniversitario / datos.length) * 100
const porcentajePostgrado = (estudioPostgrado / datos.length) * 100



console.table(datos)

console.log('Primario ---> ','Cantidad de Personas: ',estudioPrimario,'; porcentaje: ', porcentajePrimario.toFixed(2)+'%')
console.log('Secundario ---> ','Cantidad de Personas: ',estudioSecundario,'; porcentaje: ', porcentajeSecundario.toFixed(2)+'%')
console.log('Terciario ---> ','Cantidad de Personas: ',estudioTerciario,'; porcentaje: ', porcentajeTerciario.toFixed(2)+'%')
console.log('Universitario ---> ','Cantidad de Personas: ',estudioUniversitario,'; porcentaje: ', porcentajeUniversitario.toFixed(2)+'%')
console.log('Postgrado ---> ','Cantidad de Personas: ',estudioPostgrado,'; porcentaje: ', porcentajePostgrado.toFixed(2)+'%')

