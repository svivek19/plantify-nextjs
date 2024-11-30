import { NextApiRequest, NextApiResponse } from "next";
import User from "../../../models/userModel";
import dbConnect from "../../../lib/mongodb";

const getAllUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    try {
      // Connect to the database
      await dbConnect();

      // Fetch all users from the database
      const users = await User.find({}, "-password"); // Exclude password field
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ message: "Error fetching users", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
};

export default getAllUsers;
