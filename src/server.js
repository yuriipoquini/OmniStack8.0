const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://omnistack:noabnt@cluster0-xzuei.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(express.json());
//para informar o express que a resquisicao sera em json
server.use(routes);

server.listen(3333);