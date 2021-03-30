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
    coursename: {
        type: String, default: '',
        trim: true
    },
    section: {
        type: Number, default: '',
        trim: true
    },
    semester: {
        type: Number, default: '',
        trim: true
    },
    creator: {
        type: Schema.ObjectId,
        ref: 'User'
    }
});
mongoose.model('Article', ArticleSchema);
