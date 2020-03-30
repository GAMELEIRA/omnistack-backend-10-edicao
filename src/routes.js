const { Router } = require('express');

const axios = require('axios');

const routes = Router();

routes.post('/devs', async(request, response) => {

    const { github_username } = request.body;

    console.log(request.body);

    const api_response = await axios.get(`https://api.github.com/users/${github_username}`);

    console.log(api_response.data);

    return response.json({ "mensagem": "Me tornando um desenvolvedor com mais skils" });

});

module.exports = routes;