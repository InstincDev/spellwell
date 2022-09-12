const mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, 
    },
    location: {
        type: String,
        required: true,
    },
    house: {
        type: String,
    },
    security: {
        type: String,
    },
    description: {
        type: String,
    }
})

module.exports = mongoose.model('Room', RoomSchema)