// Se configura express, es decir nuestro codigo de servidor

const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(morgan('dev'))

module.exports = app