import {
  Box,
  Button,
  Card,
  CardMedia,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMenu from "../../hooks/useMenu";
import { useEffect, useState } from "react";
import { fetchMealById } from "../../api/menuApi";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const DetailedDishCard = ({ mealId, onClose }) => {
  const { state } = useMenu();
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mealData, setMealData] = useState([]);

  //fetching meal by ID
  useEffect(() => {
    if (!mealId) return;

    let cancelled = false;
    const fetchSelectedMealData = async () => {
      setError(null);
      setIsLoading(true);
      try {
        const data = await fetchMealById(mealId);
        if (!cancelled) setMealData(data);
      } catch (e) {
        if (!cancelled) setError(e);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };
    fetchSelectedMealData();

    return () => {
      cancelled = true;
    };
  }, [mealId]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "500px",
        minHeight: "667px",
        maxHeight: "716px",
      }}
    >
      {mealData.map((meal) => (
        <Card
          key={meal.id}
          sx={{
            width: "500px",
            minHeight: "667px",
            maxHeight: "716px",
            position: "relative",
            borderRadius: "2rem",
            display: "flex",
            flexDirection: "column",
            gap: 2,
            overflowY: "auto",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
        >
          <IconButton
            sx={{
              position: "fixed",
              alignSelf: "flex-end",
              cursor: "pointer",
              backgroundColor: "white",
              m: "1rem",
              "&:hover": { backgroundColor: "white" },
            }}
            onClick={onClose}
          >
            <CloseOutlinedIcon fontSize="medium" />
          </IconButton>
          <CardMedia component="img" src={meal.imageUrl} height="336px" />

          <Box
            padding={3}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Chip
              sx={{
                p: 1,
                maxWidth: "max-content",
                backgroundColor: theme.palette.background.chip,
              }}
              label={meal.origin}
            />
            <Typography variant="h5" fontWeight={600}>
              {meal.name}
            </Typography>
            <Typography
              variant="base1"
              fontWeight={400}
              sx={{ whiteSpace: "pre-wrap" }}
            >
              {meal.description}
            </Typography>
          </Box>
          <Button
            sx={{
              position: "sticky",
              backgroundColor: "white",
              display: "flex",
              bottom: 0,
              backgroundColor: theme.palette.background.button,
              p: 1.5,
              gap: 1,
              color: theme.palette.text.primary,
              boxShadow: "0 -4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <Typography variant="h6">Add to favorites </Typography>
            <BookmarkBorderIcon />
          </Button>
        </Card>
      ))}
    </Box>
  );
};

export default DetailedDishCard;
