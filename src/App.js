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
    "여자 코드 추천",
    "마마마",
    "가가가",
  ]);
  let [a2, b2] = useState(["17", "18", "19"]);
  let [따봉, 따봉변경] = useState(0);
  let [modal, setModal] = useState(false);

  function 함수() {
    console.log(1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      {/* <div className="list">
        <button
          onClick={() => {
            let copy = [...글제목];
            copy[0] = "여자코트 추천";
            글제목변경(copy);
          }}
        >
          change
        </button>
        <button
          onClick={() => {
            글제목2 = document.write(글제목.sort() + "<br />");
          }}
        >
          가나다순정렬
        </button>
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            💕
          </span>
          {따봉}
        </h4>
        <p>2월 {a2[0]}일 발행</p>
      </div>

      <div className="list">
        <h4>
          <button onClick={() => setModal(modal == false ? true : false)}>
            {글제목[2]}
          </button>
        </h4>
        <p>2월 {a2[2]}일 발행</p>
      </div> */}

      {/* {[1, 2, 3].map(function () {
        return (
          <div className="list">
            <h4>{글제목[1]}</h4>
            <p>2월 {a2[1]}일 발행</p>
          </div>
        );
      })} */}
      {글제목.map(function (a, i) {
        return (
          <div className="list" key="0">
            {/* <h4>{a}</h4> 밑에랑 같은 기능 */}
            <h4>
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
      {modal == true ? <Modal /> : null}
    </div>
  );
}
function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
