import { Box, Button, Typography } from "@mui/material";

const MenuPage = () => {
  return (
    <Box sx={{ bgcolor: "background.default", minHeight: "100vh", p: 2 }}>
      <Typography color="text.primary">Menu</Typography>
      <Button variant="category">Hello</Button>
      <Button variant="navigation">Hello</Button>
    </Box>
  );
};

export default MenuPage;
