import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

const AddCard = ({
  cardContent,
  setCardContent,
  setInputTitle,
  inputTitle,
  setInputDetail,
  inputDetail,
}) => {
  const [errorInput, setErrorInput] = useState(false);

  const inputTitleHandler = e => {
    setInputTitle(e.target.value);
  };
  const inputDetailHandler = e => {
    setInputDetail(e.target.value);
  };

  const addCardHandler = e => {
    if (inputDetail === "" && inputTitle === "") {
      setErrorInput(true);
    } else {
      setErrorInput(false);
      e.preventDefault();
      setCardContent([
        ...cardContent,
        {
          id: Math.random() * 100,
          title: inputTitle,
          detail: inputDetail,
        },
      ]);

      setInputTitle("");
      setInputDetail("");
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Judul</Form.Label>
        <Form.Control
          type="text"
          placeholder="judul memo..."
          value={inputTitle}
          onChange={inputTitleHandler}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Detail</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="isi memo..."
          value={inputDetail}
          onChange={inputDetailHandler}
        />
      </Form.Group>

      <Button onClick={addCardHandler}>Tambah</Button>
      {errorInput && <Alert variant="danger"> Error </Alert>}
    </Form>
  );
};

export default AddCard;
