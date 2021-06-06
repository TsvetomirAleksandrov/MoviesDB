const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ratingSchema = mongoose.Schema({
    writer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    movieId: {
        type: String,
    },
    rating: {
        type: Number
    }

}, { timestamps: true })

const Rating = mongoose.model('Rating', ratingSchema);
module.exports = { Rating }