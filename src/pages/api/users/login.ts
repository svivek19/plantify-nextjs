import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/userModel";
import dbConnect from "../../../lib/mongodb";

const loginUser = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Check if email and password are provided
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }

    try {
      // Connect to the database
      await dbConnect();

      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "Invalid credentials" });
      }

      const isPasswordValid = password == user.password;
      if (!isPasswordValid) {
        return res.status(400).json({ message: "Invalid credentials" });
      }
      // Send the response with the token
      return res.status(200).json({ message: "Login successful", user });
    } catch (error) {
      return res.status(500).json({ message: "Error logging in", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default loginUser;
