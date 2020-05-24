/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:29/03/2020
 * HORA:21:00
 * FINALIDADE DO MODULO: DEFINIR AS ROTAS DA APLICAÇÃO
 */

//DEFINE A IMPORTAÇÃO DA BIBLIOTECA ESPRESS. 
//ESTA BIBLIOTECA É UTILIZADA PARA FACILITAR A CRIAÇÃO DE ROTAS
const express = require('express');

//BIBLIOTECA DE CONEXÃO DO NODE AO MONGO
const mongoose = require('mongoose');

const routes = require('./routes');

//SOBE A APLICAÇÃO
const app = express();

//CONEXÃO COM O BANCO 
mongoose.connect('mongodb+srv://sa:n3@201-Biel!@omanistack-backend-10-edicao-hjhup.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

//DEFINE COMUNICAÇÃO ENTRE APLICAÇÕES NO FORMANTO JSON
app.use(express.json());

app.use(routes);

//DEFINE A PORTA DA APLICAÇÃO
app.listen(3333, (error) => {

    if (error) {

        console.log('Servidor não conectado...');

    } else {

        console.log('Servidor Conectado...');

    }

});