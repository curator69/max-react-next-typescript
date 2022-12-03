import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://curator:infinity14@cluster0.lpldsrt.mongodb.net/?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("nextjs-Max");

    const result = await meetupsCollection.insertOne(data);
    console.log(result);

    client.close();

    res.status(201).json({ message: "Meetup inserted" });
  }
}
