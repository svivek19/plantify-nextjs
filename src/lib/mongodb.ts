import { MongoClient } from "mongodb";

// MongoDB URI from .env
const client = new MongoClient(process.env.MONGODB_URI!);

// Connect to MongoDB database
const connectToDatabase = async () => {
  await client.connect();

  const db = client.db();
  return db;
};

export default connectToDatabase;
