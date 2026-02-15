import { Dialog, Grid } from "@mui/material";
import DishCard from "./DishCard";
import useMenu from "../../hooks/useMenu";
import { useState } from "react";
import DetailedDishCard from "./DetailedDishCard";

const DishList = () => {
  const { state } = useMenu();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMealId, setSelectedMealId] = useState(null);

  const onCardClick = (mealId) => {
    setSelectedMealId(mealId);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedMealId(null); // optional, but clean
  };

  return (
    <>
      <Grid
        container
        rows={{ xs: 1, sm: 2, md: 3 }}
        spacing={4}
        columnGap={1}
        sx={{
          justifyContent: { xs: "center", sm: "center", md: "flex-start" },
        }}
      >
        {state.meals.map((meal) => (
          <Grid
            key={meal.id}
            size={{ xs: 9, sm: 6, md: 3 }}
            sx={{
              display: "flex",
              justifyContent: { xs: "center", sm: "center", md: "flex-start" },
              alignItems: { xs: "center", sm: "center", md: "flex-start" },
            }}
            onClick={() => onCardClick(meal.id)}
          >
            <DishCard meal={meal} />
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={isOpen}
        sx={{ borderRadius: "4rem" }}
        PaperProps={{ sx: { borderRadius: "2rem" } }}
      >
        {selectedMealId && (
          <DetailedDishCard onClose={handleClose} mealId={selectedMealId} />
        )}
      </Dialog>
    </>
  );
};

export default DishList;
