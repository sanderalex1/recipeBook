import { Grid } from "@mui/material";
import DishCard from "./DishCard";
import useMenu from "../../hooks/useMenu";

const DishList = () => {
  const { state } = useMenu();

  return (
    <Grid container spacing={4} columns={10}>
      {state.meals.map((meal) => (
        <Grid key={meal.id} size={3}>
          <DishCard meal={meal} />
        </Grid>
      ))}
    </Grid>
  );
};

export default DishList;
