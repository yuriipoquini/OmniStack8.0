const Dev = require('../model/Dev');

module.exports = {

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