import React from "react";
import {
  Card as CardReactTrap,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import { CardContainer } from "./styles";
import { ModalCards } from "../modal";

export function Card({ item, isFavorite }) {
  let thumbnail = item.imageLinks && item.imageLinks.smallThumbnail;

  return (
    <CardContainer>
      <CardReactTrap className="Card">
        <CardBody>
          <CardTitle className="Title" tag="h5">
            {item.title}
          </CardTitle>
          <CardSubtitle className="author" tag="h6">
            Create: {item.authors}
          </CardSubtitle>
        </CardBody>
        <img className="CardImg" alt="Card cap" src={thumbnail} />
        <CardBody>
          <ModalCards isFavorite={isFavorite} item={item} />
        </CardBody>
      </CardReactTrap>
    </CardContainer>
  );
}
