const Dev = require("../models/dev.js");

module.exports = {

    async getDev(request, response) {

        const { latitude, longitude, tecnologias } = request.query;

        const array_techs = tecnologias.split(',').map(tech => tech.trim());

        const devs = await Dev.find({

            tecnologias: {
                $in: array_techs

            },
            localizacao: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 1000
                }
            }
        })

        return response.send(devs);

    }


}