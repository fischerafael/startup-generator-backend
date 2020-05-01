const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports = {

    async create(req, res) {
        const { email, password } = req.body;

        try {
            const user = await User.findOne({ email });
            if (!user) return res.status(400).send('Invalid email.');

            const passwordValidation = await bcrypt.compare(password, user.password);
            if (!passwordValidation) return res.status(400).send('Invalid password.');            
            
            const token = jwt.sign({ email }, process.env.TOKEN_SECRET);
            res.header('auth', token).send(token);            

        } catch(err) {
            return res.status(400).send(err);
        }
    }

};
