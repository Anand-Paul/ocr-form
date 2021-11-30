import { createTheme, responsiveFontSizes } from "@mui/material";
import { orange } from "@mui/material/colors";

export const theme = responsiveFontSizes(
  createTheme({
    mode: "light",
    status: {
      danger: orange[500]
    }
  })
);
