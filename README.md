# Firebase-Admin-SDK
Proyecto para ver como funciona Firebase desde el Backend mediante Firebase Admin y Nodejs

***

## Iniciar Proyecto de Node
En la terminal escribir el comando
```npm i init -y```
Esto lo que va hacer es crear un archivo *package.json*, el cual sirve para listar las configuraciones basicas del proyecto como:
* El nombre
* La version
* La descripcion
* Entre otras
Y tambien me va a permitir instalar modulos y guardar en el archivo los nombres de esos modulos. 

***

# Instalacion de modulos
```npm i express express-handlebars morgan firebase-admin dotenv```
* *express:* Framework de node, permite crear URLs y poder devolver algunas respuestas antes de procesarlas, es decir, crear rutas que luego van a poder ser visitadas
* *express-handlebars*: Modulo para devolver peticiones pero con archivos HTML. Se lo conoce como un motor de plantillas que nos permite extender los HTML, es decir, poder usar bubles, condicionale y llamar funciones desde HTML, pero a la final, todo eso se convierte tan solo en HTML y eso es lo que se devuelve al cliente.
* *morgan:* Permite ver por consola las peticiones que van llegando.
* *firebase-admin:* Diferente firebase (Sirva para interactuar desde el Frontend). Firebase Admin es un modulo dedicado al backend para poder comunicarme con mi backend de firebase a traves de codigo de backend, esto por lo general se usa funciones como servicios.
* *dotenv:* Sirve para configurar variables de entorno y poder guardar en una varible informacion que no quiero que se suba a GitHub


***

## Modulos de depentencia y desarrollo
Si constantemente se esta modificando y levantando el servidor, es practico instalar el siguiente modulo para que refresque o reinice el servidor de manera automatica, esto sirve para reflejar los cambios.
```npm i nodemon -D```
* El parametro *-D* denota que este modulo unicamente se tendra en la version de desarrollo y no en produccion

Al haber instalado nodemon unicamente para este proyecto se lo ejecuta de la siguente manera:
```npx nodemon src```

Otra forma para simplificar la escritura del comando anterior es ir al *package.json* y agregar en scripts
```"dev":"nodemon src"```

Y en consola se ejecuta el comando
```npm run dev```