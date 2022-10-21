import { CssBaseline, GlobalStyles, ThemeProvider } from "@mui/material";
import { MyRoutes } from "./routes";
import { Theme } from "./themes/Theme";

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { fontFamily: "Poppins" },
        }}
      />
      <MyRoutes />
    </ThemeProvider>
  );
}
export default App;
