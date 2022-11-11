import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Home } from "./pages/home";
import { Favorites } from "./pages/favorites";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route
            path="/*"
            element={
              <div>
                <h1>Page not Exist</h1>
              </div>
            }
          />
        </Routes>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}
