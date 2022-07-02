const { Schema } = require('mongoose');

const FavoriteSchema = new Schema ({
    favoriteId: {
        type: String,
        required: true
    },
    favoriteTitle: {
        type: String
    },
    favoritePhoto: {
        type: String
    },
    favoritePrice: {
        type: String
    }
})

module.exports = FavoriteSchema;