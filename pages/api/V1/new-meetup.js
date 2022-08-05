// api/V1/new-meetup
import connectToDB from '../components/dbConnect';


// Post request to create a new meetup
async function handler(req, res) {
  if (req.method === 'POST') {
    const meetup = req.body;
    const client = await connectToDB();
    const db = client.db();
    const meetups = db.collection('meetups');
    const result = await meetups.insertOne(meetup);

    client.close();
    res.status(201).json({message: 'Meetup created successfully', result});
  }
}
export default handler;