const mongoose = require('mongoose')

const recordsSchema = new mongoose.Schema({
    artist: {type: String, required: true},
    title: {type: String, reuqired: true},
    cover: {type: String, required: true},
    year: {type: Number, required: true},
    genre: {type: String, required: true}
})

const Records = mongoose.model('Records', recordsSchema)
module.exports = Records