const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductoSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: { type: String },
  price: { type: Number, required: true },
  url: { type: String, required: true },
  categoria: { type: String, required: true },
  disponible: { type: Boolean, required: true },
});

module.exports = mongoose.model('Producto', ProductoSchema);