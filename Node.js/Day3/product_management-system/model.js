import mongoose from 'mongoose';
const { Schema } = mongoose;

const categorySchema = new Schema({
  categoryName: {
    type: String,
    required: [true, "Category name is required"],
    unique: true,
    trim: true
  },
  description: {
    type: String
  }
}, { timestamps: true });



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
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, "Category is required"]
  }
}, { timestamps: { createdAt: 'createdAt', updatedAt: 'updateAt' } });


export const Category = mongoose.model('Category', categorySchema);
export default mongoose.model('Product', productSchema);