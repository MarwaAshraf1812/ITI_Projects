import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  productName: {
    type: String,
    required: [true, "Product name is required"],
    trim: true,
    minlength: [3, "Product name must be at least 3 characters long"],
    maxlength: [100, "Product name cannot exceed 100 characters"]
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
    min: [0, "Price cannot be negative"],
    default: 0
  }
})

export default mongoose.model('Product', productSchema);