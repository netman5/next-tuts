// api/V1/new-meetup
import { MongoClient } from 'mongodb';


// Post request to create a new meetup
async function handler(req, res) {
  if (req.method === 'POST') {
    const meetup = req.body;
    const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@api-db.ofcj2.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
    const db = client.db();
    const meetups = db.collection('meetups');
    const result = await meetups.insertOne(meetup);

    client.close();
    res.status(201).json({message: 'Meetup created successfully', result});
  }
}
export default handler;