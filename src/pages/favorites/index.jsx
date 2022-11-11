import { getFavorites } from "../../services/favorites.js";
import React, { useEffect, useState } from "react";
import { Card } from "../../components/card/index";
import { ContainerFavoriteHeader, Row } from "./styles";
import imgHome from "../../assets/butao-home.png";
import { useNavigate } from "react-router-dom";
import { BooksContainer, HeaderDiv, NavigateButton } from "../home/styles";

export function Favorites() {
  let navigate = useNavigate();

  const [favorites, setFavorites] = useState([]);

  function navigateToHome() {
    navigate("/");
  }

  useEffect(() => {
    async function getAndSetFavorites() {
      setFavorites(await getFavorites());
    }
    getAndSetFavorites();
  }, []);
  return (
    <div>
      <ContainerFavoriteHeader>
        <HeaderDiv>
          <h1>Book Favorite</h1>
          <NavigateButton onClick={navigateToHome}>
            Home
            <img src={imgHome} />
          </NavigateButton>
        </HeaderDiv>
      </ContainerFavoriteHeader>
      <Row className="row"></Row>
      <BooksContainer>
        {favorites.map((book, i) => {
          return <Card key={i} isFavorite={true} item={book} />;
        })}
      </BooksContainer>
    </div>
  );
}
