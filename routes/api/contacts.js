const express = require('express');
const {listContacts, getById, addContact, updateContact, removeContact, updateFavorite} = require('../../controllers/contacts');
const { validateRequest } = require('../../middlewares');
const { schemaCreate } = require('../../models/contact');
const router = express.Router();

router.get('/', listContacts);
router.get('/:id', getById);
router.post('/', validateRequest(schemaCreate), addContact);
router.put('/:id', updateContact);
router.patch('/:id/favorite', updateFavorite);
router.delete('/:id', removeContact);

module.exports = router;
