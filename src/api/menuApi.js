const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

async function request(endpoint) {
  const res = await fetch(`${BASE_URL}${endpoint}`);

  if (!res.ok) {
    throw new Error("Request failed");
  }

  return res.json();
}

export async function fetchCategories() {
  const data = await request("/list.php?c=list");
  // returns: { meals: [{ strCategory: "Beef" }, ...] }
  return data.meals.map((x) => x.strCategory);
}

export async function fetchAreas() {
  const data = await request("/list.php?a=list");
  // returns: { meals: [{ strArea: "American" }, ...] }
  return data.meals.map((x) => x.strArea);
}

export async function fetchIngredients() {
  const data = await request("/list.php?i=list");
  // returns: { meals: [{ idIngredient, strIngredient, ...}, ...] }
  return data.meals;
}

export async function fetchMealsByCategories(category) {
  const data = await request(`/filter.php?c=${encodeURIComponent(category)}`);

  if (!data.meals) return [];

  return data.meals.map((meal) => ({
    id: meal.idMeal,
    name: meal.strMeal,
    imageUrl: meal.strMealThumb,
  }));
}

export async function fetchMealById(id) {
  const data = await request(`/lookup.php?i=${id}`);
  // returns: { meals: [{ idIngredient, strIngredient, ...}, ...] }
  return data.meals.map((meal) => ({
    id: meal.idMeal,
    name: meal.strMeal,
    origin: meal.strArea,
    description: meal.strInstructions,
    imageUrl: meal.strMealThumb,
  }));
}

export async function fetchMealsByIngredients(ingredient) {
  const data = await request(`/search.php?f=${ingredient}`);
  // returns: { meals: [{ idIngredient, strIngredient, ...}, ...] }
  return data.meals.map((meal) => ({
    id: meal.idMeal,
    name: meal.strMeal,
    origin: meal.strArea,
    description: meal.strInstructions,
    imageUrl: meal.strMealThumb,
  }));
}
