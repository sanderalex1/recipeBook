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
        height: 240,
        width: 280,
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        borderRadius: "2rem",
      }}
    >
      <CardMedia
        component="img"
        height={160}
        image={meal.imageUrl}
        alt={meal.name}
      />
      <Typography variant="h5" fontWeight={700} sx={{ pb: 2, pl: 2 }}>
        {meal.name}
      </Typography>
    </Card>
  );
};

export default DishCard;
