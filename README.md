# Basic API REST Citas

Node.js, Express.js, MySQL, Sequelize and Typescript Basic REST API.

You can clone this repo as starter project for your Express, MySQL API server

## Features and Functionalities 😃

- Node, Express, Typescript, MySQL and Sequelize as ORM Basic REST API
- CRUD Operations (A Controller for this)
- SQL for database: Relational MySQL - Use ORM Sequelize

## Tech Stack 💻

- [Node](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [MySQL](https://www.mysql.com)
- [Typescript](https://nodejs.dev/en/learn/nodejs-with-typescript/)
- [Sequelize](https://sequelize.org)

## Installation and Running App :zap:

**1. Clone this repo by running the following command :-**

```bash
 git clone https://github.com/norbeydanilo/api-citas-sequelize-ts.git
 cd api-citas-sequelize-ts
```

**2. Install the required package :-**

```bash
 npm install
```

**3. Now run the npm command to start the project :-**

```bash
 npm run dev
```

**4.** **🎉 Open postman and test the rest api on this url `https://127.0.0.1:3000`**

Remember that the `.env` file must be created for the API to work.

Remember to create the database. It is not necessary to run script to create tables or other specifications, as this is done by the ORM.

Additionally this project uses: 

- [TS-Nodemon](https://stackoverflow.com/questions/37979489/how-to-watch-and-reload-ts-node-when-typescript-files-change)
- [body-parser](https://www.npmjs.com/package/body-parser)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [MySQL2](https://www.npmjs.com/package/mysql2)
- [Cors](https://www.npmjs.com/package/cors)

### Swagger and Running

Debes tener creada unicamente la base de datos. El ORM se encarga del mapeo entre la especificación en código y la base de datos MySQL.

La base de datos para este ejemplo se llama `citasuno`.

Debes tener instalado Swagger.

```bash
npm install swagger-jsdoc swagger-ui-express
npm install @types/swagger-ui-express @types/swagger-jsdoc --save-dev
```

Luego debes importarlo en el proyecto en `app.ts`:

```typescript
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from "./src/swagger.json";
```

Si te aparece el problema de `Cannot find module './src/swagger.json` es por la importación de un archivo JSON en TypeScript.

En TypeScript, por defecto, no se pueden importar archivos JSON directamente. Para solucionar este problema, debes habilitar la opción `--resolveJsonModule` en tu archivo de configuración de TypeScript (`tsconfig.json`).

Finalmente agrega la ruta para la documentación con Swagger.

```typescript
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
```

Con esto, podrás acceder a la documentación de Swagger en la ruta `/api-docs` de tu aplicación.

Por favor, ten en cuenta que este es un ejemplo básico y puedes necesitar ajustarlo según tus necesidades. Por ejemplo, puedes querer agregar autenticación a la ruta de la documentación de Swagger, o puedes tener otros middlewares que necesiten ser configurados. Te recomiendo que consultes la [documentación de `swagger-ui-express`](https://www.npmjs.com/package/swagger-ui-express) para obtener más detalles.

## Data model

Entra al siguiente [repositorio](https://github.com/norbeydanilo/database-exercises/tree/main/citas) para encontrar el modelo de datos empleado para este ejemplo.

## Steps

Guía paso a paso para crear una API REST básica con TypeScript, Node.js, Express.js y Sequelize ORM para MySQL:

1. **Inicializa tu proyecto Node.js** con el comando `npm init`. Este comando te guiará para crear un archivo `package.json` que contendrá las configuraciones básicas de tu proyecto.

2. **Instala las dependencias necesarias** para tu proyecto con el siguiente comando:
```bash
npm i express nodemon body-parser mysql2 dotenv cors swagger-jsdoc swagger-ui-express
```
Esto instalará Express.js (un marco de aplicación web), nodemon (para reiniciar automáticamente tu servidor), body-parser (para analizar el cuerpo de las solicitudes HTTP), mysql2 (un controlador MySQL para Node.js), dotenv (para manejar variables de entorno), cors (para habilitar CORS), y swagger-jsdoc y swagger-ui-express (para la documentación de la API).

3. **Instala Sequelize y Sequelize-Typescript** con el comando `npm install sequelize sequelize-typescript`. Sequelize es un ORM para Node.js que soporta la sintaxis de ES6, ES7 y TypeScript.

4. **Instala ts-node y nodemon como dependencias de desarrollo** con el comando `npm install --save-dev ts-node nodemon`. Ts-node te permite ejecutar TypeScript directamente, mientras que nodemon reiniciará tu servidor automáticamente cada vez que hagas un cambio en tu código.

5. **Instala TypeScript como una dependencia de desarrollo** con el comando `npm install typescript --save-dev`.

6. **Instala los tipos de TypeScript para tus dependencias** con el comando:
```bash
npm i @types/node @types/express @types/body-parser @types/mysql @types/dotenv @types/cors @types/swagger-ui-express @types/swagger-jsdoc --save-dev
```
Esto te permitirá utilizar TypeScript con Node.js, Express.js, body-parser, mysql, dotenv, cors, swagger-ui-express y swagger-jsdoc.

7. **Inicializa tu configuración de TypeScript** con el comando `npx tsc --init`. Esto creará un archivo `tsconfig.json` en tu proyecto.

8. **Configura las opciones del compilador de TypeScript** en tu archivo `tsconfig.json`:
```json
"compilerOptions": {
    "target": "es6",   
    "module": "commonjs",
    "outDir": "./dist",
    "strict": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
}
```
Esto configurará TypeScript para compilar a ES6, utilizar módulos CommonJS, emitir archivos compilados a la carpeta `./dist`, habilitar todas las comprobaciones de tipo estrictas, habilitar la interoperabilidad de módulos ES, y habilitar los decoradores experimentales y la emisión de metadatos de decoradores.

9. **Configura los scripts de tu proyecto** en tu archivo `package.json`:
```json
"scripts": {
    "start": "tsc && nodemon dist/app.js",
    "dev": "tsc && nodemon app.ts"
}
```
Esto te permitirá iniciar tu proyecto con `npm start` y ejecutar tu proyecto en modo de desarrollo con `npm run dev`.

10. **Crea un archivo `.env`** para almacenar tus variables de entorno.

11. **Crea un archivo `.gitignore`** para especificar los archivos y directorios que Git debe ignorar.

¡Y eso es todo! Ahora tienes una base para empezar a construir tu API REST con TypeScript, Node.js, Express.js y Sequelize ORM para MySQL. ¡Buena suerte con tu proyecto! 🚀

> Create by Norbey Danilo Muñoz Cañón, 2023.
>
> The idea of ​​intellectual property is fundamentally wrong. Knowledge belongs to all people!