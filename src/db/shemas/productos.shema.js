import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    default: 0,
  },
  url: {
    type: String,
    required: true,
  },
  store: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

const ProductModel = mongoose.model('Product', ProductSchema);

export default ProductModel;
