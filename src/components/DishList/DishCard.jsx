import { Card, CardMedia, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const DishCard = ({ meal }) => {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        borderRadius: "2rem",
      }}
    >
      <CardMedia
        component="img"
        height="100%"
        width="100%"
        image={meal.imageUrl}
        alt={meal.name}
      />
      <Typography variant="h4" fontWeight={700} sx={{ p: 2 }}>
        {meal.name}
      </Typography>
    </Card>
  );
};

export default DishCard;
