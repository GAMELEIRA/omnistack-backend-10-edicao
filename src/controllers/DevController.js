const Dev = require('../models/dev');

const axios = require('axios');

module.exports = {

    async postDev(request, response) {

        const { github_username, tecnologias, latitude, longitude } = request.body;

        const dev_existe = await Dev.findOne({ github_username });

        if (dev_existe) {

            return response.status(400).send("Dev já existente na nossa base de dados!");

        }

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

        return response.json(dev)
    },

    async getDev(request, response) {

        const devs = await Dev.find();

        return response.json(devs);

    }

}