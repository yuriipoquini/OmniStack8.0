const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

const server = express();

//conexao com o banco
mongoose.connect('mongodb+srv://omnistack:noabnt@cluster0-xzuei.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
//para informar ao express que a resquisicao sera em json
server.use(routes);

server.listen(3333);