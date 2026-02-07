import { createContext, useEffect, useState } from "react";
import {
  fetchCategories,
  fetchMealsByCategories,
  fetchAreas,
  fetchMealsByIngredients,
} from "../api/menuApi";

export const MenuContext = createContext();

export default function MenuProvider({ children }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [meals, setMeals] = useState([]);
  const [areas, setAreas] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState({ categories: false, meals: false });
  const [error, setError] = useState(null);

  //fetching categories
  useEffect(() => {
    const fetchCategoriesData = async () => {
      setError(null);
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
        return;
      }
      setError(null);
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

  //fetching areas
  useEffect(() => {
    const fetchAllAreas = async () => {
      try {
        const fetchedAreas = await fetchAreas();
        setAreas(fetchedAreas);
      } catch (e) {
        setError(e);
      }
    };
    fetchAllAreas();
  }, []);

  const selectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const handleSearch = async (text) => {
    setSearchQuery(text);

    if (!text.trim().toLowerCase()) {
      reloadMeals();
      return;
    }

    setLoading((prev) => ({ ...prev, meals: true }));
    setError(null);

    try {
      const searchedMeals = await fetchMealsByIngredients(
        text.trim().toLowerCase(),
      );
      setMeals(searchedMeals);
    } catch (e) {
      setError(e);
    }
    setLoading((prev) => ({ ...prev, meals: false }));
  };

  const clearSearch = () => {
    setSearchQuery("");
  };

  const reloadMeals = async () => {
    setError(null);
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
    state: {
      categories,
      selectedCategory,
      meals,
      searchQuery,
      loading,
      error,
      areas,
    },
    actions: { selectCategory, handleSearch, clearSearch, reloadMeals },
  };

  return <MenuContext.Provider value={value}>{children}</MenuContext.Provider>;
}
