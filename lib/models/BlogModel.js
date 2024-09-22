const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Assuming you have a User model
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    authorImg: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

const BlogModel = mongoose.models.blog || mongoose.model("blog", Schema);

export default BlogModel;