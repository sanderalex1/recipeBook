import { Box, Typography } from "@mui/material";
import CategoryButtons from "../components/CategoryButtons/CategoryButtons";
import useMenu from "../hooks/useMenu";

const MenuPage = () => {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", p: 2 }}>
      <Typography color="text.primary">Menu</Typography>
      <CategoryButtons />
    </Box>
  );
};

export default MenuPage;
