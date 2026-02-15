import { Box, Button, TextField, Typography, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import useMenu from "../../hooks/useMenu";

const Header = () => {
  const { state, actions } = useMenu();
  const theme = useTheme();

  return (
    <Box
      sx={{
        height: "30%",
        backgroundColor: theme.palette.background.custom,
        color: theme.palette.text.secondary,
      }}
    >
      <Box
        sx={{ display: "flex", justifyContent: "space-between", px: 5, pt: 2 }}
      >
        <Button
          sx={{
            textTransform: "uppercase",
          }}
        >
          <Typography
            component={RouterLink}
            to="/"
            sx={{ fontWeight: 500, textDecoration: "none", color: "inherit" }}
          >
            menu
          </Typography>
        </Button>
        <Button
          sx={{
            textTransform: "uppercase",
          }}
        >
          <Typography
            component={RouterLink}
            to="/favorites"
            sx={{ fontWeight: 500, textDecoration: "none", color: "inherit" }}
          >
            favorites
          </Typography>
        </Button>
      </Box>
      {/* search bar */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          alignContent: "center",
          gap: 4,
          paddingY: 4,
        }}
      >
        <Typography variant="h4">What's in your fridge?</Typography>
        <TextField
          id="outlined-basic"
          variant="outlined"
          placeholder="Enter the ingredients you have..."
          value={state.searchQuery}
          onChange={(e) => actions.handleSearch(e.target.value)}
          sx={{
            width: "60%",
            backgroundColor: theme.palette.text.secondary,
            input: {
              color: theme.palette.text.primary,
            },
            borderRadius: "10px",
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                border: "none",
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Header;
