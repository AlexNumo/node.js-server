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
        const contactName = await contacts.addContact(req.body);
        res.status(201).json('Hello ' + contactName.name + ' ' + contactName.surname );
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
