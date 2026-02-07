import { Box, Typography } from "@mui/material";
import CategoryButtons from "../components/CategoryButtons/CategoryButtons";
import DishList from "../components/DishList/DishList";

const MenuPage = () => {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100dvh", p: 2 }}>
      <Box sx={{ display: "flex", gap: 5 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="h6">Categories</Typography>
          <CategoryButtons />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
          <Typography variant="h6">number of recipes you can make</Typography>
          <DishList />
        </Box>
      </Box>
    </Box>
  );
};

export default MenuPage;
