import React from "react";
import { Card as CardReactTrap } from "reactstrap";
import {
  CardContainer,
  ImgDiv,
  CardTitle,
  CardSubTitle,
  TextZoneDiv,
  ButtonZoneDiv,
} from "./styles";
import { ModalCards } from "../modal";

export function Card({ item, isFavorite }) {
  let thumbnail = item.imageLinks && item.imageLinks.smallThumbnail;
  if (item.title.length >= 40) {
    item.title = item.title.slice(0, 40) + "...";
  }
  return (
    <CardContainer>
      <CardReactTrap className="Card">
        <ImgDiv
          style={{
            backgroundImage: `url(${thumbnail})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></ImgDiv>
        <TextZoneDiv>
          <CardTitle>{item.title}</CardTitle>
          <CardSubTitle>Create: {item.authors}</CardSubTitle>
        </TextZoneDiv>
        <ButtonZoneDiv>
          <ModalCards isFavorite={isFavorite} item={item} />
        </ButtonZoneDiv>
      </CardReactTrap>
    </CardContainer>
  );
}
