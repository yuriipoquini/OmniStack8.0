//fomra mais facil de importar dependencias de um obejto, 
const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    bio: String,     
    // por nao ser um campo obrigatorio, posso passar o tipo dela direto
   
    avatar: {
        type: String,
        required: true
    },

    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }],
    
    deslikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev'
    }]

},
    {
        timestamps: true
        /*
        cria duas colunas automaticas em cada registro no banco
        createdAt e o updatedAt
        */
    }

);

module.exports = model('Dev', DevSchema);