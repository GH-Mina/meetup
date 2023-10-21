import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavoriteMeetup: (meetup) => {},
  removeFavoriteMeetup: (id) => {},
  isMeetupFavorite: (id) => {},
});

export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteMeetup = (favoriteMeetup) => {
    setUserFavorites((previousFavorites) => {
      return previousFavorites.concat(favoriteMeetup);
    });
  };

  const removeFavoriteMeetup = (id) => {
    setUserFavorites((previousFavorites) => {
      return previousFavorites.filter((meetup) => meetup.id !== id);
    });
  };

  const isMeetupFavorite = (id) => {
    return userFavorites.some((meetup) => meetup.id === id);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavoriteMeetup: addFavoriteMeetup,
    removeFavoriteMeetup: removeFavoriteMeetup,
    isMeetupFavorite: isMeetupFavorite,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
