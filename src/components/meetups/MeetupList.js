import React from "react";
import MeetupItem from "./MeetupItem";

const MeetupList = (props) => {
  return (
    <ul>
      {props.meetups.map((meetup) => (
        <MeetupItem key={meetup.id} meetup={meetup} />
      ))}
    </ul>
  );
};

export default MeetupList;
