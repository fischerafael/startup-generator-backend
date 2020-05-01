const Item = require('../models/Item');

module.exports = {

    async create(req, res) {
        
        const user = req.user.email;
        const { type, description } = req.body;

        try {
            const item = await Item.create({
                type,
                description,
                user
            });
    
            return res.json(item);
        } catch (err) {
            return res.status(400).send(err);
        }       
    },

    async delete(req, res) {
        const _id = req.params._id;
        const user_email = req.user.email;

        try {            
            const user = await Item.findOne({ _id });
            const email = user.user;
            if (email === user_email) {
                item = await Item.deleteOne({ _id });
                return res.send("Deletado com sucesso");
            } else {
                return res.status(400).send('Operation not allowed');
            } 
        } catch (err) {
            return res.status(400).send(err);
        }        
    }

};
