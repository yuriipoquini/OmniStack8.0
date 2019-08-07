const Dev = require('../model/Dev');

module.exports = {
    async store(req, res) {
        const { user } = req.headers;
        const { devId } = req.params;

        const loggedDev = await Dev.findById(user);//user que deu dislike
        const targetDev = await Dev.findById(devId);//user que recebeu o dislike

        if (!targetDev) {
            return res.status(400).json({ error: 'User do not exists' });
        }

        loggedDev.dislikes.push(targetDev._id);

        await loggedDev.save();

        return res.json(loggedDev);
    }
};