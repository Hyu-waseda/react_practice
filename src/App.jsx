/* eslint react-hooks/exhaustive-deps:off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage.jsx";
//import ColorfulMessage from './components/ColorfulMessage.jsx';

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceFlag(!faceShowFlag);
  };

  useEffect(() => {
    console.log("useEffect");
    if (num % 3 === 0 && num > 0) {
      faceShowFlag || setFaceFlag(true);
    } else {
      faceShowFlag && setFaceFlag(false);
    }
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>m(_ _)m</p>}
    </>
  );
};

export default App;
