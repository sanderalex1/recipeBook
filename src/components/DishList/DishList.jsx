import { Dialog, Grid } from "@mui/material";
import DishCard from "./DishCard";
import useMenu from "../../hooks/useMenu";
import { useState } from "react";
import DetailedDishCard from "./DetailedDishCard";

const DishList = () => {
  const { state } = useMenu();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const onCardClick = (mealId) => {
    setSelectedCard(mealId);
    setIsOpen(true);
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
          <DishCard open={() => onCardClick(meal.id)} meal={meal} />
        </Grid>
      ))}
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {selectedCard && <DetailedDishCard card={selectedCard} />}
      </Dialog>
    </Grid>
  );
};

export default DishList;
