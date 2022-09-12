const mongoose = require('mongoose')

const CharacterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    house: {
        type: String,
        required: true,
    },
    dateOfBirth: {
        type: Date,
    },
    ancestry: {
        type: String,
    },
    status: {
        type: String,
        default: 'student',
        enum: ['student', 'staff', 'alumni'],
    },
    actors: {
        type: String,
    },
    alive: {
        type: Boolean,
    },
    image: {
        type: String,
    }
})

module.exports = mongoose.model('Character', CharacterSchema)