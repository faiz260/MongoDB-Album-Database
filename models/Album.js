const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        unique: true
    },
    singers: {
        type: Array,
        default: []
    },
    tracks: {
        type: Array,
        default: []
    }
})

const Album = mongoose.model('Album', albumSchema)

module.exports = {
    Album
}