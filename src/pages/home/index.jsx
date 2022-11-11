import React from "react";
import { useRef, useState, useEffect } from "react";
import {
  HomeContainer,
  Row,
  BooksContainer,
  NavigateButton,
  HeaderDiv,
} from "./styles";
import { Card } from "../../components/card";
import { NoCard } from "../../components/noCard";
import { useNavigate } from "react-router-dom";
import { getBooks } from "../../services/bookApi";

export function Home() {
  let navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [bookData, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [schrollRadio, setSchrollRadio] = useState(null);
  const schrollObserve = useRef();

  function navigateToFavorites() {
    navigate("/favorites");
  }

  const searchBook = async (event) => {
    if (event.key === "Enter") {
      setLoading(true);
      const items = await getBooks(search, index);
      setData(items);
      setLoading(false);
    }
  };

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      const radio = entries[0].intersectionRatio;
      setSchrollRadio(radio);
    });

    intersectionObserver.observe(schrollObserve.current);

    return () => {
      intersectionObserver.disconnect();
    };
  }, []);

  function nextPage() {
    setIndex(index + 20);
  }
  const handleWithSchrollRadio = async () => {
    if (search !== "") {
      nextPage();
      setLoading(true);
      let items = await getBooks(search, index);
      setData(bookData.concat(items));
      setLoading(false);
    }
  };

  useEffect(() => {
    handleWithSchrollRadio();
  }, [schrollRadio]);

  return (
    <div>
      <HomeContainer>
        <HeaderDiv>
          <h1>Book Finder</h1>
          <NavigateButton onClick={navigateToFavorites}>
            Acesse sua Estante
          </NavigateButton>
        </HeaderDiv>
        <input
          type="text"
          placeholder="Digite um nome de um livro ou autor"
          onChange={(event) => setSearch(event.target.value)}
          onKeyPress={searchBook}
        />
      </HomeContainer>
      <Row></Row>
      <BooksContainer>
        {bookData.length ? (
          bookData.map((book, i) => {
            return <Card key={i} item={book.volumeInfo} />;
          })
        ) : (
          <NoCard />
        )}
      </BooksContainer>
      {loading ? (
        <div
          style={{ height: "100px", display: "flex", justifyContent: "center" }}
        >
          <h1>Loading</h1>
        </div>
      ) : null}
      <div
        style={{ height: "100px" }}
        ref={schrollObserve}
        id={"schrollObserve"}
      ></div>
    </div>
  );
}
