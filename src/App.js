import "./App.css";
import { Fragment, useState } from "react";
import { ThemeProvider, Box } from "@mui/material";
import { lightTheme, darkTheme } from "./theme";
import { Main, AuthRoutes, PageRoutes} from "./pages";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };


  return (
    <Fragment>
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <Box
          sx={{
            minHeight: "100vh",
          }}
        >
          <Router>
        {/* Routing pages wrapped with PageRoutes */}
          <PageRoutes />
          </Router>
        </Box>
      </ThemeProvider>
    </Fragment>
  );
}

export default App;
