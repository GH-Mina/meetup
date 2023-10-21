import React, { useContext } from "react";
import classes from "./MeetupItem.module.css";
import Card from "../wrapper/Card";
import FavoritesContext from "../../store/favorites-context";

const MeetupItem = ({ meetup }) => {
  const favoriteContext = useContext(FavoritesContext);
  const isMeetupFavorite = favoriteContext.isMeetupFavorite(meetup.id);
  const onMeetupAddToFavoritesClick = () => {
    if (isMeetupFavorite) {
      favoriteContext.removeFavoriteMeetup(meetup.id);
    } else {
      favoriteContext.addFavoriteMeetup({
        id: meetup.id,
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={meetup.image} alt={meetup.title} />
        </div>
        <div className={classes.content}>
          <h3>{meetup.title}</h3>
          <address></address>
          <p>{meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={onMeetupAddToFavoritesClick}>
            {isMeetupFavorite ? "Remove from favorites" : "To Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
