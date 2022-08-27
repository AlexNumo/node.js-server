const { Contact } = require('../models/contact');

const listContacts = async () => {
    return Contact.find({}, {}, {});
}

const getByEmail = async (email) => {
    return Contact.find(email);
}

const addContact = async (contact) => {
    return Contact.create(contact);
}

module.exports = {
    listContacts, addContact, getByEmail
}
