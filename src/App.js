/* eslint-disable */
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";

  let [글제목, 글제목변경] = useState([
    "남자 코드 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  let [a2, b2] = useState(["17", "18", "19"]);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(true);
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={() => {
                  따봉변경(따봉 + 1);
                }}
              >
                💕
              </span>
              {따봉}
            </h4>
            <p>2월 {a2[1]}일 발행</p>
          </div>
        );
      })}

      {modal == true ? (
        <Modal title={title} 글수정={글제목변경} 글제목={글제목} />
      ) : null}
    </div>
  );
}
function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

export default App;
