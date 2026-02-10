import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { Box, Card, CardMedia, IconButton, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

const DishCard = ({ meal }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        gap: "1rem",
        height: "100%",
        width: "100%",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        borderRadius: "1rem",
        cursor: "pointer",
      }}
    >
      <IconButton
        sx={{
          display: "flex",
          position: "absolute",
          right: 0,
          p: 1,
          m: 1,
          backgroundColor: "rgba(0, 0, 0, .6)",
          color: "white",

          "&:hover": { backgroundColor: "rgba(0, 0, 0, .6)" },
        }}
        onClick={(e) => {
          e.stopPropagation(); // stops the card click
          setIsFavorite((prev) => !prev);
        }}
      >
        <Favorite
          sx={{ display: isFavorite ? "block" : "none", color: "red" }}
        />
        <FavoriteBorder sx={{ display: isFavorite ? "none" : "block" }} />
      </IconButton>
      <Box maxHeight={190}>
        <CardMedia
          component="img"
          height="100%"
          image={meal.imageUrl}
          alt={meal.name}
        />
      </Box>
      <Typography variant="h7" fontWeight={700} sx={{ pb: 2, pl: 2 }}>
        {meal.name}
      </Typography>
    </Card>
  );
};

export default DishCard;
