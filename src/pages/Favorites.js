import React, { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

const FavoritesPage = () => {
  const favoriteContext = useContext(FavoritesContext);
  const favoriteMeetups = favoriteContext.favorites;
  return (
    <section>
      <h1>My Favorites</h1>
      <MeetupList meetups={favoriteMeetups} />
    </section>
  );
};

export default FavoritesPage;
