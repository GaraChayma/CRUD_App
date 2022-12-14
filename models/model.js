const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    telephone: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Data', dataSchema)