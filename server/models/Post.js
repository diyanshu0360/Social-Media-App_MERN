// Creating Sample Schema format to create users 
const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    userID: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        max: 500
    },
    img: {
        type: String,
    },
    likes: {
        type: Array,
        default: []
    }
}, {timestamps: true});

module.exports = mongoose.model('Post', postSchema);
