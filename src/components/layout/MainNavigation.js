import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

const MainNavigation = () => {
  const favoriteContext = useContext(FavoritesContext);
  return (
    <header className={styles.header}>
      <div className={styles.logo}>React course</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add new meetup</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
            <span className={styles.badge}>
              {favoriteContext.totalFavorites}
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
