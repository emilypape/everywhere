const { Schema } = require('mongoose');

const FavoriteSchema = new Schema ({
    favoriteId: {
        type: String,
        required: true
    }
})

module.exports = FavoriteSchema;