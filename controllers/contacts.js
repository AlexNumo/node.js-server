const {contacts} = require("../services");
const {createError} = require("../helpers/errors");

const listContacts = async (req, res, next) => {
    try {
        const all = await contacts.listContacts();
        res.json(all);
    } catch (e) {
        next(e);
    }
}

const getByEmail = async (req, res, next) => {
    try {
        const  email  = req.params;
        const contactResults = await contacts.getByEmail(email);
        if(!contactResults) {
            throw createError(404, "Not found");
        }
        res.json(contactResults.map(function (contactResult) {
            return (contactResult.name + ' ' + contactResult.surname);
        }));
    } catch (e) {
        next(e);
    }
}

const addContact = async (req, res, next) => {
    try {
        await contacts.addContact(req.body);
        res.status(201).json('Done');
    } catch (e) {
        if(e.message.includes('duplicate')){
            e.status = 400
        }
        next(e);
    }
}

module.exports = {
    listContacts, getByEmail, addContact
}
