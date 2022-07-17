const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    heading:{type: String,required:true},
    metadesc:{type: String,required:true},
    slug:{type: String,required:true},
    tags:{type: String,required:true},
    content:{type: String,required:true},
}, {timestamps:true});

const blogModel = mongoose.model("blog",BlogSchema)

module.exports = blogModel