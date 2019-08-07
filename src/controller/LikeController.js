const Dev = require('../model/Dev');

module.exports = {

    //Mostrar ao usuario, os outros usuarios que ele nao deu like ou deslike
    async indexedDB(req, res) {
        const { user } = req.headers;
        const loggedDev = await Dev.findById(user);

        const users = await Dev.find({
            $and: [
                { _id: { $ne/*NOT EQUAL*/: user}},
                { _id: { $nin/*NOT IN*/: loggedDev.likes } },
                { _id: { $nin/*NOT IN*/: loggedDev.dislikes } }
            ]
        })

        return res.json(users);

    },

    async store(req, res) {
        const { user } = req.headers;
        const { devId } = req.params;

        const loggedDev = await Dev.findById(user);//user que deu like
        const targetDev = await Dev.findById(devId);//user que recebeu o like

        if(!targetDev){
            return res.status(400).json({error: 'User do not exists'});
        }

        if(targetDev.likes.includes(loggedDev._id)){
            console.log('deu match')
        }

        loggedDev.likes.push(targetDev._id);

        await loggedDev.save();

        return res.json(loggedDev);
    }
};