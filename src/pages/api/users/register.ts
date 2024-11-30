import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/userModel";
import dbConnect from "../../../lib/mongodb";

const registerUser = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { fullname, email, password } = req.body;

    // Check if all required fields are provided
    if (!fullname || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    try {
      // Connect to the database
      await dbConnect();

      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Create a new user
      const newUser = new User({
        fullname,
        email,
        password,
      });

      // Save the user to the database
      await newUser.save();

      return res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Error creating user", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default registerUser;
