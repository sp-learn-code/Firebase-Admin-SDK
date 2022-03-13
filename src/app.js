// Se configura express, es decir nuestro codigo de servidor

const express = require('express')
const morgan = require('morgan')
const path = require('path')


const app = express()
//Configuracion de morgan, con el parametro de morgan dev, en el que indica que si se realiza una peticion, la podemos ver por consola
app.use(morgan('dev'))

//Estas dos lineas hace que cuando yo envie un dato a traves de post (request body) el lo entendera
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//Accede a todas las rutas 
app.use(require('./routes/index'))

//Hace publica la carpeta en el navegador (aplicacion cliente), es decir, puede acceder a sus archivos
app.use(express.static(path.join(__dirname,'public')))

module.exports = app