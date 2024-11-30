import mongoose, { Schema, Document } from "mongoose";

// Product schema definition
interface Product extends Document {
  name: string;
  price: number;
  url: string;
  ratings: number;
  createdAt: Date;
}

// Product schema
const productSchema = new Schema<Product>({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  url: { type: String, required: true },
  ratings: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

const ProductModel =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default ProductModel;
