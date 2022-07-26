import { Fragment } from 'react';
import Head from 'next/head';
import connectToDB from '../components/dbConnect';
import MeetupList from '../components/meetups/MeetupList';
const HomePage = (props) => {

  return(
    <Fragment>
      <Head>
        <title>Meetup Homepage</title>
        <meta name="description" content="Browse and add new list of meetups" />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  )

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
  const client = await connectToDB();
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