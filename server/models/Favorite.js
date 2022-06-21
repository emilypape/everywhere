const { Schema } = require('mongoose');

const FavoriteSchema = new Schema ({
    favoriteId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    cost: {
        type: String
    }
})

module.exports = FavoriteSchema;