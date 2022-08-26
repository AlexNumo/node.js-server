const {Schema, model} = require('mongoose');
const Joi = require('joi');

const schema = new Schema({
    name: {
        type: String,
    },
    surname: {
        type: String,
    },
    age: {
        type: Number,
    }
});


const schemaCreate = Joi.object({
    name: Joi.string().min(3).required(),
    surname: Joi.string().min(3).required(),
    age: Joi.number().integer().min(18).max(99).required(),
});


const Contact = model('contact', schema);

module.exports = {
    Contact, schemaCreate
}

