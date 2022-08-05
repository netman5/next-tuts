import { Fragment } from 'react';
import Head from 'next/head';
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
  return (
    <Fragment>
      <Head>
        <title>Add new Meetup</title>
        <meta name="description" content="Add your own Meetups" />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>
  )
}

export default NewMeetUpPage