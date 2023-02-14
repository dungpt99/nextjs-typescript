import { Heebo } from "@next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const heebo = Heebo({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
});

// Create a theme instance.
export const theme = createTheme({
  typography: {
    fontFamily: heebo.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthSm: {
          "@media (min-width: 600px)": {
            maxWidth: "680px",
          },
        },
        maxWidthMd: {
          "@media (min-width: 900px)": {
            maxWidth: "860px",
          },
        },
      },
      defaultProps: {
        maxWidth: "md",
      },
      variants: [],
    },
  },
});
