// mongo.js
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
console.log(uri)

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

export async function connectToDatabase() {
  await client.connect();
  return client.db("flit");
}
