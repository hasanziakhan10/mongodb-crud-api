const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
    min: [0, 'Price must be a positive number'],
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
  },
  quantity: {
    type: Number,
    default: 0,
    min: [0, 'Quantity cannot be negative'],
  },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);