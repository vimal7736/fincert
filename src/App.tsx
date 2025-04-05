import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useMemo, useState } from "react";
import { themeSettings } from "./theme";
import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./scenes/nav";
import Dashboard from "./scenes/Dashboard";
import Prediction from "./scenes/prediction";

function App() {
  const [state, setGameState] = useState("dash");
  const theme = useMemo(() => createTheme(themeSettings), []);
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box width="100%" height="100%" padding="1rem 2rem 4rem 2rem">
            <Nav />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/prediction" element={<Prediction />} />
            </Routes>
          </Box>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
