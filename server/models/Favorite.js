const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    movieTitle: {
        type: String
    },
    moviePoster: {
        type: String
    },
    movieRating: {
        type: String
    },
    movieDescription: {
        type: String
    },
    movieReleaseDate: {
        type: String
    }

}, { timestamps: true })

const Favorite = mongoose.model('Favorite', favoriteSchema);
module.exports = { Favorite }