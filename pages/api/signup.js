import { connectToDatabase } from "@/database/mongo";
import bcrypt from "bcrypt";

const saltRounds = 10;
export default async function signUpHandler(req, res) {
  const db = await connectToDatabase();
  if (req.method === "POST") {
    try {
      let formData = req.body;
      formData.isAdmin = false;
      delete formData.confirmPassword;
      const hashedPassword = await bcrypt.hash(formData.password, saltRounds);
      formData.password = hashedPassword;
      // Check if the user with the email already exists
      const existingUser = await db
        .collection("users")
        .findOne({ email: formData.email });

      if (existingUser) {
        res.status(400).json({ error: "User with this email already exists" });
      } else {
        await db.collection("users").insertOne(formData);

        res.status(200).json({ message: "User created succesfully" });
      }
    } catch (error) {
      console.error("Error creating user:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // Return a 405 Method Not Allowed error for non-POST requests
    res.status(405).end();
  }
}
