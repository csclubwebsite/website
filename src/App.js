import Header from "./components/Header";
import theme from "./themes/theme";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
