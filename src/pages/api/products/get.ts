import { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "@/lib/mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      // Connect to MongoDB
      const db = await connectToDatabase();
      const collection = db.collection("products");

      // Fetch all products from the database
      const products = await collection.find({}).toArray();

      // Return the list of products
      return res.status(200).json({ products });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  return res.status(405).json({ error: "Method not allowed" });
}
