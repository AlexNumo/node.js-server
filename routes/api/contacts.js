const express = require('express');
const {listContacts, addContact} = require('../../controllers/contacts');
const { validateRequest } = require('../../middlewares');
const { schemaCreate } = require('../../models/contact');
const router = express.Router();

router.get('/', listContacts);
router.post('/', validateRequest(schemaCreate), addContact);

module.exports = router;
