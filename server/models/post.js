import mongoose from 'mongoose'; // model
import bcrypt from 'bcryptjs';

const Schema = mongoose.Schema;

const Post = new Schema({
    title: String,
    content: String,
    created: { type: Date, default: Date.now }
});

export default mongoose.model('post', Post);