import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router-dom";

const NewMeetupPage = () => {
  const navigate = useNavigate();

  const addNewMeetupHandler = (meetup) => {
    fetch(
      "https://react-onboarding-da225-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meetup),
        headers: {
          "Content-Type": "Application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  };

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddNewMeetup={addNewMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
