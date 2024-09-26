import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    blogImage: {
        type: String,
        //required: true,
    },
    blogTitle: {
        type: String,
        required: true,
    },
    publishingDate: {
        type: Date,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    authorName: {
        type: String,
        required: true,
    },
    paragraphTitle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Blog = mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
export default  Blog
