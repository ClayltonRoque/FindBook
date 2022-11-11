import React from "react";
import { NoTask } from "./styles";
import bookImg from "../../assets/book.png";

export function NoCard() {
  return (
    <NoTask>
      <img src={bookImg} />
      <p>Pesquise por algum livro ou autor na barra de pesquisa acima</p>
      <p>E veja a magica acontecer 🤩</p>
    </NoTask>
  );
}
