const mongoose = require("mongoose");

const schema = mongoose.Schema({
    blogId: {
        type: String,
        required: true
    },
    blogTitle: String,
    blogDesc: String,
    comments: Array
}
);

const Blog =  mongoose.model("Blog", schema);
module.exports = {Blog};