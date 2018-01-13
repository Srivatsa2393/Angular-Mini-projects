var express = require('express');
var router = express.Router();

//bringing the contact schema
const Contact = require('../models/contacts');

//retrieving contact
router.get('/contacts', (req, res, next) => {
    //res.send('Retrieving the contact list');
    Contact.find((err, contacts) => {
        res.json(contacts);
    })
});

//add contact
router.post('/contacts', (req, res, next) => {
    //logic to add a contact
    var newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });
    newContact.save((err, contact) => {
        if(err) {
            res.json({
                msg: 'Failed to add contact'
            });
        }else{
            res.json({
                msg: 'Contact added successfully'
            });
        }
    })
});

//deleting the contact
router.delete('/contact/:id', (req, res, next) => {
    //logic to delete contact
    Contact.remove({_id: req.params.id}, (err, result) => {
        if(err) {
            res.json(err);
        }else{
            res.json(result);
        }
    });
});


module.exports = router;