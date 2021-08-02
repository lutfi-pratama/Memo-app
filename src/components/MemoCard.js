import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CloseButton from "react-bootstrap/CloseButton";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

const MemoCard = ({ id, title, detail, cardContent, setCardContent }) => {
  const [modalShow, setModalShow] = useState(false);

  const closeCardHandler = () => {
    setCardContent(cardContent.filter(e => e.id !== id));
  };

  function MyVerticallyCenteredModal(props) {
    const [editInputTitle, setEditInputTitle] = useState(props.title);

    const hideEditModal = () => {
      // props.title = editInputTitle;
      props.cardContent.map(e => {
        if (e.id === props.id) {
          e.title = editInputTitle;
        }
      });
      props.setCardContent(props.cardContent);
      console.log(props.cardContent);
      setModalShow(false);
    };

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Edit detail Memo
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Judul</Form.Label>
              <Form.Control
                type="text"
                placeholder="judul memo..."
                value={editInputTitle}
                onChange={e => {
                  setEditInputTitle(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Detail</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="isi memo..."
                value={props.detail}
                // onChange={inputDetailHandler}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={hideEditModal}>Edit</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  return (
    <>
      <Card style={{ width: "70%" }}>
        <CloseButton onClick={closeCardHandler} className="btn--abs" />
        <button className="btn__edit" onClick={() => setModalShow(true)}>
          <i class="bi bi-pencil"></i>
        </button>
        <Card.Body>
          <Card.Title className="card__title">{title}</Card.Title>
          <Card.Text className="card__content">{detail}</Card.Text>
        </Card.Body>
      </Card>

      <MyVerticallyCenteredModal
        id={id}
        show={modalShow}
        title={title}
        cardContent={cardContent}
        setCardContent={setCardContent}
      />
    </>
  );
};

export default MemoCard;
