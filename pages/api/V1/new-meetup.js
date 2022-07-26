// api/V1/new-meetup


// Post request to create a new meetup
function handler(req, res) {

  if (req.method === 'POST') {
    const { title, address, description } = req.body;
    const meetup = {
      title,
      address,
      description,
    };
    meetups.push(meetup);
    res.status(201).json(meetup);
  }
}