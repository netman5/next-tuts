import { useRouter } from 'next/router';
import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetUpPage(){
  const router = useRouter()
  async function addMeetupHandler (enteredMeetupData){
    const response = await fetch('/api/V1/new-meetup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(enteredMeetupData)
    });

    await response.json();
    router.push('/')
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetUpPage