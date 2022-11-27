import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    common: {
      blue: "#0055A2",
      gold: "#E5A823",
    },
    primary: {
      main: "#0055A2",
      light: "#1C88F4",
    },
    background: {
      default: "#0055A2",
    },
  },
});

export default theme;
