import { Box, TextField, Typography, useTheme } from "@mui/material";
import useMenu from "../../hooks/useMenu";

const SearchBar = () => {
  const { state, actions } = useMenu();
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        gap: 4,
        height: "20vh",
        backgroundColor: theme.palette.background.custom,
        color: theme.palette.text.secondary,
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
  );
};

export default SearchBar;
