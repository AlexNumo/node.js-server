const {Schema, model} = require('mongoose');
const Joi = require('joi');

const schema = new Schema({
    email: {
        type: String,
    },
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
    email: Joi.string().min(6).required(),
    name: Joi.string().min(3).required(),
    surname: Joi.string().min(3).required(),
    age: Joi.number().integer().min(18).max(99).required(),
});


const Contact = model('contact', schema);

module.exports = {
    Contact, schemaCreate
}

