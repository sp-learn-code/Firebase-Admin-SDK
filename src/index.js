//Archivo principal para que arranque todo el proyecto

const app = require('./app')
require('./firebase')


app.listen(3000)
console.log('server is running on port 3000')