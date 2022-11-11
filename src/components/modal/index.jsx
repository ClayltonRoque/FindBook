import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { ModalCard } from "./styles";
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
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
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
              color="warning"
              style={{}}
              onClick={() => {
                handleRemoveFavoriteBook(item);
              }}
            >
              Remover Favorito
            </Button>
          ) : (
            <Button
              color="success"
              style={{}}
              onClick={() => {
                handleAddFavoriteBook(item);
              }}
            >
              Favoritar
            </Button>
          )}
          <Button color="primary" target="_blank" href={item.previewLink}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </ModalCard>
  );
}
