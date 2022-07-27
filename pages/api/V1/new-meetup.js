// api/V1/new-meetup
import { MongoClient } from 'mongodb';


// Post request to create a new meetup
function handler(req, res) {
  if (req.method === 'POST') {
    const { title, address, description } = req.body;
    const meetup = {
      title,
      address,
      description,
      image
    };

    MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@api-db.ofcj2.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
    meetups.push(meetup);
    res.status(201).json(meetup);
  }
}