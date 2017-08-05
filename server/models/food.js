import mongoose from 'mongoose'; // model


const Schema = mongoose.Schema;

const Food = new Schema({
    name: String,
    ingredients: String,
    created: { type: Date, default: Date.now }
});

export default mongoose.model('food', Food);