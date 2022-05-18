// importar dependência
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

// iniciando express
const server = express()
server

    // utilizar body da request
    .use(express.urlencoded({extended: true}))
    // utilizando os arquivos estáticos
    .use(express.static('Public'))

    // configurar template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // rotas da aplicação
    .get('/', pages.index)
    .get('/startup', pages.startup)
    .get('/startups', pages.startups)
    .get('/create-startup', pages.createStartup)
    .post('/save-startup', pages.saveStartup)
    

// ligar o servidor
server.listen(5501)  