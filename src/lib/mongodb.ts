import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your Mongo URI to .env.local");
}

const uri = process.env.MONGODB_URI;
const options = {};

// if (process.env.NODE_ENV === "development") {
//   // In development mode, use a global variable to preserve the client.
//   if (!global._mongoClientPromise) {
//     client = new MongoClient(uri, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
// In production mode, create a new client.
const client = new MongoClient(uri, options);
const clientPromise = client.connect();
// }

export default clientPromise;
