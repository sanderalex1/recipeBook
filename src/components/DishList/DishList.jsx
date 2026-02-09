import { Grid } from "@mui/material";
import DishCard from "./DishCard";
import useMenu from "../../hooks/useMenu";
import { useState } from "react";

const DishList = () => {
  const { state } = useMenu();
  const [openedMealId, setOpenedMealId] = useState(null);

  const handleOpenDishCard = (mealId) => {
    setOpenedMealId(mealId);
  };
  const handleCloseDishCard = () => {
    setOpenedMealId(null);
  };
  return (
    <Grid container rows={{ xs: 1, sm: 2, md: 3 }} spacing={4} columnGap={1}>
      {state.meals.map((meal) => (
        <Grid
          key={meal.id}
          size={{ xs: 9, sm: 6, md: 3 }}
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "center", md: "flex-start" },
            alignItems: { xs: "center", sm: "center", md: "flex-start" },
          }}
        >
          <DishCard
            open={() => handleOpenDishCard(meal.id)}
            close={handleCloseDishCard}
            isOpen={openedMealId === meal.id}
            meal={meal}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default DishList;
