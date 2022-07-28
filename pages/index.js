import { MongoClient } from 'mongodb';

import MeetupList from '../components/meetups/MeetupList';

const HomePage = (props) => {

  return <MeetupList meetups={props.meetups} />
}

// export async function getServerSideProps(context) {
//   // Fetch data from external API
//   // Perform necessary logic for credentials that sholud be exposed to the client
//   // Use this when you need access to req, res, or next
//   const req = context.req
//   const res = context.res

//   return {
//     props: {
//       meetups
//     }
//   }
// }

export async function getStaticProps() {
  // Fetch data from external API
  // Read data from any file system
  // Possible problem here is the data might not be upto date
  const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@api-db.ofcj2.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
  const db = client.db();
  const meetupCollections = db.collection('meetups');
  const meetups = await meetupCollections.find({}).toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map(meetup => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      }))
    },
    revalidate: 1 // Make sure the data is fetched again if it's changed & not older than 1 second
  }
}

export default HomePage