import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetails";

const MeetupDetails = (props) => {
  const { image, title, address, description } = props.meetupData;
  return (
    <MeetupDetail
      image={image || 'no image available'}
      title={title}
      address={address}
      description={description}
    />
  );
};

export async function getStaticPaths() {
  // used for get the paths of a dynamic generate pages
  // return an array of paths
  // It is only used with getStaticProps
  // it is needed in a dynamic generate pages

  const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@api-db.ofcj2.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
  const db = client.db();
  const meetupCollections = db.collection('meetups');
  const meetups = await meetupCollections.find({}, {_id: 1}).toArray();
  client.close();

  return {
    fallback: false,
    paths: meetups.map(meetup => ({
      params: {
        meetupId: meetup._id.toString()
      }
    }))
  }
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@api-db.ofcj2.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`)
  const db = client.db();
  const meetupCollections = db.collection('meetups');
  const meetup = await meetupCollections.findOne({ _id: ObjectId(meetupId) });
  console.log(meetup)
  client.close();


  return {
    props: {
      meetupData: {
        image: meetup.image,
        title: meetup.title,
        address: meetup.address,
        description: meetup.description,
        id: meetup._id.toString(),
      }
    },
  };
}
export default MeetupDetails;
