import MeetupList from '../components/meetups/MeetupList'
const meetups = [
  {
    id: 'm1',
    title: 'Meetup 1',
    image: 'https://source.unsplash.com/random',
    address: '123 Main St',
    description: 'This is a description',
  },

  {
    id: 'm2',
    title: 'Meetup 1',
    image: 'https://source.unsplash.com/random',
    address: '123 Main St',
    description: 'This is a description',
  }
];

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
  return {
    props: {
      meetups
    },
    revalidate: 1 // Make sure the data is fetched again if it's changed & not older than 1 second
  }
}

export default HomePage