import NewMeetupForm from '../components/meetups/NewMeetupForm'

function NewMeetUpPage(){
  const addMeetupHandler = (enteredMeetupData) => {
    console.log(enteredMeetupData);
  };
  return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetUpPage