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

  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        image: "https://source.unsplash.com/random",
        title: meetupId,
        address: "123 Main St",
        description: "This is a description",
      },
    },
  };
}
export default MeetupDetails;
