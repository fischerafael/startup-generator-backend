const express = require('express');
const cors = require('cors');
const routes = require('./src/routes');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

app.use(cors());

mongoose.connect(process.env.DB_CONNECT, 
    {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    },
    () => console.log('Successfully connected to database')
);

app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => console.log('Server is running on port 3333'));

