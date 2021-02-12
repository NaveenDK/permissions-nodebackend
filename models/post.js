const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title:{

        type: String,
        required: "Title required",
        minlength:4,
        maxlength: 150

    },
    body:{
        type: String,
        required :" Body is required",
        minlength: 4,
        maxlength:300



    }
})

module.exports  = mongoose.model("Post", PostSchema);