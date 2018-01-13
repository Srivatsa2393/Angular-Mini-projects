var express = require('express');
var router = express.Router();

//retrieving contact
router.get('/contacts', (req, res, next) => {
    res.send('Retrieving the contact list');
});

//add contact
router.post('/contacts', (req, res, next) => {
    //logic to add a contact
});

//deleting the contact
router.delete('/contact/:id', (req, res, next) => {
    //logic to delete contact
});


module.exports = router;