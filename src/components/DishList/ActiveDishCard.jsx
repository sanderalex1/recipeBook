import { Box, Card, CardMedia } from "@mui/material";

const ActiveDishCard = () => {
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
        <CardMedia component="img" height="" />
      </Card>
    </Box>
  );
};

export default ActiveDishCard;
