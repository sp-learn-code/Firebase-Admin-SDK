// Configuracion de firebase
  
require('dotenv').config()

//aplicationDefault busca automaticamente la variable de entorno GOOGLE_APPLICATION_CREDENTIALS
const {initializeApp, applicationDefault} = require('firebase-admin/app')
const {getFirestore} = require('firebase-admin/firestore')

initializeApp({
    credential: applicationDefault()
})

const db = getFirestore()

module.exports = {db}