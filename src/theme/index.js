import { createTheme } from "@mui/material";
import { palette } from "./palette";

import { MuiButton } from "./components/MuiButton";

export const theme = createTheme({
  palette,

  components: {
    MuiButton,
  },
});
