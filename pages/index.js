import { useEffect, useState } from 'react';
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

const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState([])

  useEffect(() => {
    setLoadedMeetups(meetups)
  }, [])

  return <MeetupList meetups={loadedMeetups} />
}

export default HomePage