const { Contact } = require('../models/contact');

const listContacts = async () => {
    return Contact.find({}, {}, {});
}

const addContact = async (contact) => {
    return Contact.create(contact);
}

module.exports = {
    listContacts, addContact
}
