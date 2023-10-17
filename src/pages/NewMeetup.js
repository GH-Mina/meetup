import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const onAddNewMeetup = (meetup) => {};

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddNewMeetup={onAddNewMeetup} />
    </section>
  );
};

export default NewMeetupPage;
