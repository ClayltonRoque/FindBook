import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import { Home } from "./pages/home";
import { Favorites } from "./pages/favorites";

export function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}
