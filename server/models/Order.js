const mongoose = require('mongoose');

const {Schema} = mongoose;

const orderSchema = new Schema({
    purchaseDate: {
        type: Date,
        default: Date.now
    },
    totalCost: {
        type: String
    }
})

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;