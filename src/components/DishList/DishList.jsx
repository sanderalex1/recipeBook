import { Grid } from "@mui/material";
import DishCard from "./DishCard";
import useMenu from "../../hooks/useMenu";

const DishList = () => {
  const { state } = useMenu();

  return (
    <Grid container columns={{ xs: 4, sm: 8, md: 12 }} spacing={4}>
      {state.meals.map((meal) => (
        <Grid
          key={meal.id}
          size={{ xs: 12, sm: 8, md: 4 }}
          sx={{ display: "flex" }}
        >
          <DishCard meal={meal} />
        </Grid>
      ))}
    </Grid>
  );
};

export default DishList;
