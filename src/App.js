import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  //자료 잠깐 저장할 땐 변수
  let [a, b] = useState(["남자 코드 추천", "강남 우동맛집", "파이썬 독학"]);
  let [a2, b2] = useState(["17", "18", "19"]);
  let [logo, setLogo] = useState("ReactBlog");
  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>

      <div className="list">
        <h4>{a[0]}</h4>
        <p>2월 {a2[0]}일 발행</p>
      </div>
      <div className="list">
        <h4>{a[1]}</h4>
        <p>2월 {a2[1]}일 발행</p>
      </div>
      <div className="list">
        <h4>{a[2]}</h4>
        <p>2월 {a2[2]}일 발행</p>
      </div>
    </div>
  );
}

export default App;
