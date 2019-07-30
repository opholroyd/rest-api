const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    //date: Date.now,
    description: {
        type: String,
        required: true
    },
    tags: String,
})

module.exports = mongoose.model('Posts', PostSchema);