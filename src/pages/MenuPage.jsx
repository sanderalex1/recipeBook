import { Box, Container, Typography } from "@mui/material";
import CategoryButtons from "../components/CategoryButtons/CategoryButtons";
import DishList from "../components/DishList/DishList";
import SearchBar from "../components/SearchBar/SearchBar";
import useMenu from "../hooks/useMenu";

const MenuPage = () => {
  const { state } = useMenu();

  return (
    <>
      <SearchBar />
      <Container
        fixed
        sx={{ bgcolor: "background.default", minHeight: "100dvh", p: 2 }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "column", md: "row" },
            gap: 5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              flex: 1,
            }}
          >
            <Typography
              sx={{ display: { xs: "none", sm: "none", md: "block" } }}
              variant="h6"
            >
              Categories
            </Typography>
            <CategoryButtons />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: { xs: "center", sm: "center", md: "start" },
            }}
          >
            <Typography variant="h6">
              {state.meals.length} recipes you can make
            </Typography>
            <DishList />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default MenuPage;
