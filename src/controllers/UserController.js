const brcypt = require('bcryptjs');
const User = require('../models/User');

module.exports = {    
    
    async create(req, res) {
        const {
            email,            
            name,
            city,
            state,
            phone,
            site,
            instagram,
            facebook
        } = req.body;
        let { password } = req.body;

        const existingEmail = await User.findOne({ email });
        if (existingEmail) return res.status(400).send('User already exists');

        const salt = await brcypt.genSalt(10);
        password = await brcypt.hash(password, salt);

        try {
            const user = await User.create({
                email,
                password,
                name,
                city,
                state,
                phone,
                site,
                instagram,
                facebook
            })
            return res.json(user.name);

        } catch (err) {
            return res.status(400).send(err);
        }        
    },

    async index(req, res) {
        try {
            const users = await User.find();          

            return res.json(users);
        } catch (err) {
            return res.status(400).send(err);
        }
    },

    async indexSpecific(req, res) {
        try {
            const { email } = req.params; 
            
            const user = await User.findOne({ email });
            return res.json(user);
        } catch (err) {
            return res.status(400).send(err);
        }
    },

    async update(req, res) {
        
        const email = req.user.email;
        console.log(email);
        try {
            await User.updateOne({ email }, { $set: req.body });
            return res.send('Updated Successfully');
        } catch (err) {
            return res.status(400).send(err);
        }
    },
    
    async delete(req, res) {
        const email = req.user.email;

        try {
            await User.deleteOne({ email });
            return res.send('Deleted successfully');
        } catch (err) {
            return res.status(400).send(err);
        }
    }

};