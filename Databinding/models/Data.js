const mongoose = require('mongoose');

module.exports = mongoose.model('Data', {
    ip: String,
    name: String
});