import Card from "react-bootstrap/Card";
import CloseButton from "react-bootstrap/CloseButton";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import CardModal from "./CardModal";

const MemoCard = ({
  id,
  title,
  detail,
  cardContent,
  setCardContent,
  hideEditModal,
  setModalShow,
  modalShow,
  setEditCard,
}) => {
  const closeCardHandler = () => {
    setCardContent(cardContent.filter(e => e.id !== id));
  };

  return (
    <>
      <Card style={{ width: "70%" }}>
        <CloseButton onClick={closeCardHandler} className="btn--abs" />
        <button
          className="btn__edit"
          onClick={() => {
            setModalShow(true);
          }}
        >
          <i class="bi bi-pencil"></i>
        </button>
        <Card.Body>
          <Card.Title className="card__title">{title}</Card.Title>
          <Card.Text className="card__content">{detail}</Card.Text>
        </Card.Body>
      </Card>

      <CardModal
        id={id}
        show={modalShow}
        title={title}
        detail={detail}
        cardContent={cardContent}
        setCardContent={setCardContent}
        modalShow={modalShow}
        setModalShow={setModalShow}
      />
    </>
  );
};

export default MemoCard;
