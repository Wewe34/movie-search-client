import { createTheme } from "@mui/material";
import { blue, grey, red } from "@mui/material/colors";

export const theme = createTheme({
    palette: {
      primary: {
        main: '#fff' 
      },
      secondary: {
        main: red[900],
      },
      info: {
        main: blue[500]
      },
      background: {
        default: grey[900]
      }
    },
  }); 