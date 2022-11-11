import React from "react";
import { useRef, useState, useEffect } from "react";
import { HomeContainer } from "./styles";
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
        <div>
          <button onClick={navigateToFavorites}>Acesse sua Estante</button>
        </div>
        <header>BookFind</header>

        <input
          type="text"
          placeholder="Digite um nome de um livro ou autor"
          onChange={(event) => setSearch(event.target.value)}
          onKeyPress={searchBook}
        />
      </HomeContainer>

      {bookData.length ? (
        bookData.map((book, i) => {
          return <Card key={i} item={book.volumeInfo} />;
        })
      ) : (
        <NoCard />
      )}
      {loading ? (
        <div
          style={{ height: "200px", display: "flex", justifyContent: "center" }}
        >
          <h1>Loading</h1>
        </div>
      ) : null}
      <div ref={schrollObserve} id={"schrollObserve"}></div>
    </div>
  );
}
