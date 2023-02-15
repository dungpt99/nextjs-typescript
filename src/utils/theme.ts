import { Heebo } from "@next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const heebo = Heebo({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
});

// Create a theme instance.
export let theme = createTheme({
  typography: {
    fontFamily: heebo.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#ff6464",
    },
    secondary: {
      light: "#EDF7FA",
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    text: {
      primary: "#21243D",
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
    MuiButton: {
      variants: [
        {
          props: {
            variant: "contained",
            color: "primary",
          },
          style: {
            color: "white",
          },
        },
      ],
    },
  },
});

theme = responsiveFontSizes(theme);

// theme.typography.h3 = {
//   fontSize: "2rem",

//   [theme.breakpoints.up("md")]: {
//     fontSize: "3rem",
//   },
// };
