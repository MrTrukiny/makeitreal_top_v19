import mongoose from 'mongoose';
// import { Schema, model } from 'mongoose';
const { Schema, model } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
});

// module.exports = mongoose.model('Product', productSchema)
export default model('Product', productSchema);
