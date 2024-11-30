import { NextApiRequest, NextApiResponse } from "next";
import mongoose from "mongoose";
import ProductModel from "@/models/Product";

const connectToDatabase = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGODB_URI!);
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      await connectToDatabase();

      const { name, price, ratings, url } = req.body;

      // Validate product data
      if (!name || typeof price !== "number") {
        return res.status(400).json({ error: "Invalid product data" });
      }

      // Create new product using Mongoose
      const newProduct = new ProductModel({ name, price, ratings, url });
      await newProduct.save();

      return res
        .status(201)
        .json({ message: "Product added", product: newProduct });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
