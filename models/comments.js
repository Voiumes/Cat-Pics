const mongoose = require('mongoose');

let commentSchema = mongoose.Schema({
    title: 'String',
    author: 'String'
})

let Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;