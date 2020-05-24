const { Router } = require('express');

const axios = require('axios');

const routes = Router();

const Dev = require('./models/dev.js');

routes.post('/devs', async(request, response) => {

    const { github_username, tecnologias, latitude, longitude } = request.body;

    const array_techs = tecnologias.split(',').map(tech => tech.trim());

    const api_response = await axios.get(`https://api.github.com/users/${github_username}`);

    const { name = login, avatar_url, bio } = api_response.data;

    const location = {
        type: "Point",
        coordinates: [longitude, latitude]
    }

    const dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        tecnologias: array_techs,
        localizacao: location
    });

    return response.json(dev);

});

routes.get('/', (requisicao, resposta) => {

    //RETORNO DE RESPOSTA NO FORMATO TEXTO 
    return resposta.json({
        "mensagem": "Olá, Gabriel Gameleira dos Santos"

    });

});


module.exports = routes;