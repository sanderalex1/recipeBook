import { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const FavoritesContext = createContext();

export const useFavoritesContext = () => useContext(FavoritesContext);

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const addToFavorites = (meal) => {
    setFavorites((prev) => [...prev, meal]);
  };

  const removeFromFavorites = (mealId) => {
    setFavorites((prev) => prev.filter((meal) => meal.id !== mealId));
  };

  const isFavorite = (mealId) => {
    return favorites.some((meal) => meal.id === mealId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
