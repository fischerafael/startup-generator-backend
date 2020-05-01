const Item = require('../models/Item');

module.exports = {

    async index(req, res) {
        try {
            const { user } = req.params;
            const items = await Item.find({ user });
            res.json(items);
        } catch (err) {
            return res.status(400).send(err);
        }
    }
}