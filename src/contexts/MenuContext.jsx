import { createContext, useContext, useEffect, useState } from "react";
import { fetchCategories, fetchMealsByCategories } from "../api/menuApi";

const MenuContext = createContext();

export default function MenuProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [meals, setMeals] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState({ categories: false, meals: false });
  const [error, setError] = useState(null);

  //fetching categories
  useEffect(() => {
    const fetchCategoriesData = async () => {
      setLoading((prev) => ({ ...prev, categories: true }));
      try {
        const fetchedCategories = await fetchCategories();
        setCategories(fetchedCategories);
        setSelectedCategory(fetchedCategories[0]);
      } catch (e) {
        setError(e);
      }

      setLoading((prev) => ({ ...prev, categories: false }));
    };
    fetchCategoriesData();
  }, []);

  //fetching meals
  useEffect(() => {
    const fetchMealsData = async () => {
      if (!selectedCategory) {
        return console.log("No selected category");
      }

      setLoading((prev) => ({ ...prev, meals: true }));
      try {
        const fetchedMeals = await fetchMealsByCategories(selectedCategory);
        setMeals(fetchedMeals);
      } catch (e) {
        setError(e);
      }
      setLoading((prev) => ({ ...prev, meals: false }));
    };
    fetchMealsData();
  }, [selectedCategory]);

  const selectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const reloadMeals = async () => {
    setLoading((prev) => ({ ...prev, meals: true }));
    try {
      const fetchedMeals = await fetchMealsByCategories(selectedCategory);
      setMeals(fetchedMeals);
    } catch (e) {
      setError(e);
    }
    setLoading((prev) => ({ ...prev, meals: false }));
  };

  const value = {
    state: { categories, selectedCategory, meals, searchQuery, loading, error },
    actions: { selectCategory, handleSearch, clearSearch, reloadMeals },
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}

export function useMenu() {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("useMenu must be used inside a MenuProvider");
  }
  return context;
}
