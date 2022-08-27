const {contacts} = require("../services");

const listContacts = async (req, res, next) => {
    try {
        const all = await contacts.listContacts();
        res.json(all);
    } catch (e) {
        next(e);
    }
}

const addContact = async (req, res, next) => {
    try {
        res.status(201).json('Done');
    } catch (e) {
        if(e.message.includes('duplicate')){
            e.status = 400
        }
        next(e);
    }
}

module.exports = {
    listContacts, addContact
}
