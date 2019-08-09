const axios = require('axios');
const Dev = require('../model/Dev');

module.exports = {

    //Mostrar ao usuario, os outros usuarios que ele nao deu like ou deslike
    async index(req, res) {
        const { user } = req.headers;
        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
                { _id: { $ne/*NOT EQUAL*/: user } },
                { _id: { $nin/*NOT IN*/: loggedDev.likes } },
                { _id: { $nin/*NOT IN*/: loggedDev.dislikes } }
            ]
        })

        return res.json(users);

    },
    async store(req, res){
        const { username } = req.body;//desestruturação, ou seja, me entregue o campo username de req.body

        const userExists = await Dev.findOne({user: username});

        if(userExists){
            return res.json(userExists);
        }

        const response = await axios.get(`https://api.github.com/users/${username}`);

        const { name, bio , avatar_url: avatar } = response.data;

       const dev =  await Dev.create({
            name,
            user: username,
            bio,
            avatar 
        });

        return res.json(dev);
    }

};