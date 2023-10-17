import React, { useRef } from "react";
import Card from "../wrapper/Card";
import classes from "./NewMeetupForm.module.css";

const NewMeetupForm = (props) => {
  const meetupTitle = useRef();
  const meetupImage = useRef();
  const meetupAddress = useRef();
  const meetupDescriptioon = useRef();

  const onConfirmClick = (event) => {
    event.preventDefault();
    const meetup = {
      title: meetupTitle.current.value,
      image: meetupImage.current.value,
      address: meetupAddress.current.value,
      description: meetupDescriptioon.current.value,
    };
    props.onAddNewMeetup(meetup);
  };
  return (
    <Card>
      <form className={classes.form} onSubmit={onConfirmClick}>
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={meetupTitle} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" ref={meetupImage} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" ref={meetupAddress} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            required
            rows="5"
            ref={meetupDescriptioon}
          />
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
