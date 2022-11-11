import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { ModalCard, ButtonOpenModal } from "./styles";
import { addFavorite, removeFavorite } from "../../services/favorites";

export function ModalCards({ item, isFavorite }) {
  const [modal, setModal] = useState(false);

  function handleAddFavoriteBook(item) {
    addFavorite(item);
  }
  function handleRemoveFavoriteBook(item) {
    document.location.reload(true);
    removeFavorite(item);
  }

  const toggle = () => setModal(!modal);

  let thumbnail = item.imageLinks && item.imageLinks.thumbnail;
  return (
    <ModalCard>
      <ButtonOpenModal onClick={toggle}>Detalhes</ButtonOpenModal>
      <Modal
        isOpen={modal}
        toggle={toggle}
        className="Modali"
        style={{ color: "black" }}
      >
        <img style={{ height: "450px" }} src={thumbnail} />
        <ModalHeader toggle={toggle}>{item.title}</ModalHeader>
        <ModalBody style={{ color: "black" }}>{item.description}</ModalBody>
        <ModalFooter>
          {isFavorite ? (
            <Button
              style={{ backgroundColor: "#FF473C" }}
              onClick={() => {
                handleRemoveFavoriteBook(item);
              }}
            >
              Remover Favorito
            </Button>
          ) : (
            <Button
              style={{ backgroundColor: "#FF823C" }}
              onClick={() => {
                handleAddFavoriteBook(item);
              }}
            >
              Favoritar
            </Button>
          )}
          <Button
            style={{ backgroundColor: "#56C200" }}
            target="_blank"
            href={item.previewLink}
          >
            Mais Informações
          </Button>
        </ModalFooter>
      </Modal>
    </ModalCard>
  );
}
