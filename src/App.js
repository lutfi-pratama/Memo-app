import MemoCard from "./components/MemoCard";
import AddCard from "./components/AddCard";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";

function App() {
  const [inputTitle, setInputTitle] = useState("");
  const [inputDetail, setInputDetail] = useState("");
  const [cardContent, setCardContent] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  // const [editCard, setEditCard] = useState({
  //   id: null,
  //   cond: false,
  //   title: "",
  // });

  return (
    <div className="App">
      <header>My Memo</header>
      <AddCard
        cardContent={cardContent}
        setCardContent={setCardContent}
        inputTitle={inputTitle}
        setInputTitle={setInputTitle}
        inputDetail={inputDetail}
        setInputDetail={setInputDetail}
      />

      <div className="card__container">
        {cardContent.map(e => (
          <MemoCard
            id={e.id}
            title={e.title}
            detail={e.detail}
            cardContent={cardContent}
            setCardContent={setCardContent}
            modalShow={modalShow}
            setModalShow={setModalShow}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
