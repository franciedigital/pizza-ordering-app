import { connectToDatabase } from "@/database/mongo";

export default async function handler(req, res) {
  const db = await connectToDatabase();
  if (req.method === "POST") {
    try {
      // Handle the form data, e.g., store it in a database
      const formData = req.body;
      // Check if the user with the email already exists
      const existingUser = await db
        .collection("users")
        .findOne({ email: formData.email });

      if (existingUser) {
        res.status(400).json({error: 'User with this email already exists'});

      } else {
        await db.collection('users').insertOne(formData);

        res.status(200).json({message: 'User created succesfully'});
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
