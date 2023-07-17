const express= require('express');
const Contact= require('../models/contact.js');
const { addContact, getAllContacts, deleteContact, updateContact, getOneContact } = require('../Controllers/controllers.js');
const router = express.Router();

router.post('/addContact', addContact )
// get all contacts
router.get('/allcontacts',getAllContacts)
//delete params
router.delete("/deletecontact/:id", deleteContact)
//updateContact
router.put('/updatecontact/:id',updateContact)
// get one contact
router.get('/getOneContact/:id', getOneContact)


module.exports=router
