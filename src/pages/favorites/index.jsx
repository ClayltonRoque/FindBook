import { getFavorites } from "../../services/favorites.js";
import React, { useEffect, useState } from "react";
import { Card } from "../../components/card/index";

export function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function getAndSetFavorites() {
      setFavorites(await getFavorites());
    }
    getAndSetFavorites();
  }, []);
  return (
    <div>
      {favorites.map((book, i) => {
        return <Card key={i} isFavorite={true} item={book} />;
      })}
    </div>
  );
}
