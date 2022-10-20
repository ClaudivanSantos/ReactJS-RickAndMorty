import { createTheme } from '@mui/material';

export const Theme = createTheme({
  typography: {
    allVariants: {
      color: "#fff"
    },
    button: {
      textTransform: 'none',
    },
  },
  palette: {
    primary: {
      main: '#fff',
      dark: '#fff',
      light: '#fff',
      contrastText: '#fff',
    },
    secondary: {
      main: '#FF0000',
      dark: '#cb0000',
      light: '#FF0000',
      contrastText: '#fff',
    },
    background: {
      paper: '#fff',
      default: '#8A2BE2',
    },
  },
});
