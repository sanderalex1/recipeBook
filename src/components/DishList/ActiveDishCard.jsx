import { Box, Card, CardMedia, Typography } from "@mui/material";
import useMenu from "../../hooks/useMenu";

const ActiveDishCard = () => {
  const { state } = useMenu();

  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}
    >
      <Card
        sx={{
          maxWidth: "448px",
          minHeight: "667px",
          maxHeight: "716px",
          borderRadius: "24px",
        }}
      >
        <CardMedia component="img" height="336px" />
        <Typography></Typography>
      </Card>
    </Box>
  );
};

export default ActiveDishCard;
