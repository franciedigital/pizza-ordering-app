import { connectToDatabase } from "@/database/mongo";
import bcrypt from "bcrypt";

export default async function signInHandler(req, res) {
  const db = await connectToDatabase();
  if (req.method === "POST") {
    try {
      const formData = req.body;
      // Get the user with the email
      const authUser = await db
        .collection("users")
        .findOne({ email: formData.email });

      if (!authUser) {
        // User not found
        res.status(401).json({ error: "Authentication failed" });
        return;
      }

      // Compare the entered password with the hashed password in the database
      const passwordMatch = await bcrypt.compare(
        formData.password,
        authUser.password
      );

      if (passwordMatch && authUser.isAdmin) {
        res.status(200).json({ message: "User successfully authenticated" });
      } else {
        // Passwords don't match
        res.status(401).json({ error: "Authentication failed or not an admin" });
      }
    } catch (error) {
      console.error("Authentication error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // Return a 405 Method Not Allowed error for non-POST requests
    res.status(405).end();
  }
}
