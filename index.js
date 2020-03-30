/**
 * AUTOR:GABRIEL GAMELEIRA DOS SANTOS
 * DATA:29/03/2020
 * HORA:21:00
 * FINALIDADE DO MODULO: DEFINIR AS ROTAS DA APLICAÇÃO
 */

//DEFINE A IMPORTAÇÃO DA BIBLIOTECA ESPRESS. 
//ESTA BIBLIOTECA É UTILIZADA PARA FACILITAR A CRIAÇÃO DE ROTAS
const express = require('express');

//SOBE A APLICAÇÃO
const app = express();

app.use(express.json());

app.get('/', (requisicao, resposta) => {

    //RETORNO DE RESPOSTA NO FORMATO TEXTO 
    return resposta.json({
        "mensagem": "Eu amo a Gabrielly Pache Martins."

    });

});

//DEFINE A PORTA DA APLICAÇÃO
app.listen(1234);