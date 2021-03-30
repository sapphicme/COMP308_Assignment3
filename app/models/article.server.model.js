const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ArticleSchema = new Schema({
    created: {
        type: Date,
        default: Date.now
    },
    coursecode: {
        type: String,
        default: '',
        trim: true,
        required: 'Course Code cannot be blank'
    },
    coursename: String,
    section: Number,
    semester:Number,
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});
mongoose.model('Article', ArticleSchema);
