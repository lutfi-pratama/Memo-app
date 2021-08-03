import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";

const CardModal = props => {
  const [editInputTitle, setEditInputTitle] = useState(props.title);
  const [editInputDetail, setEditInputDetail] = useState(props.detail);

  const hideEditModal = () => {
    const changeCardContent = [...props.cardContent];

    changeCardContent.map(e => {
      if (e.id === props.id) {
        e.title = editInputTitle;
        e.detail = editInputDetail;
      }
    });

    props.setCardContent(changeCardContent);

    props.setModalShow(false);
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
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Detail</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="isi memo..."
              value={editInputDetail}
              onChange={e => {
                setEditInputDetail(e.target.value);
              }}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={hideEditModal}>Edit</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CardModal;
