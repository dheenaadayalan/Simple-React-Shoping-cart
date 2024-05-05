import { useState } from "react";
import "./App.css";
import Navbar from "./compnents/Navbar";
import Header from "./compnents/Header";
import Footer from "./compnents/Footer";
import MainBody from "./compnents/MainBody";

function App() {
  //const status = [true, true, true,true,true,true,true,true]
  const [btn, setBtn] = useState(true);
  const [btn1, setBtn1] = useState(true);
  const [btn2, setBtn2] = useState(true);
  const [btn3, setBtn3] = useState(true);
  const [btn4, setBtn4] = useState(true);
  const [btn5, setBtn5] = useState(true);
  const [btn6, setBtn6] = useState(true);
  const [btn7, setBtn7] = useState(true);
  const [counter, setcount] = useState(0);

  return (
    <>
      <Navbar counter={counter} />
      <Header />
      <MainBody
        btn={btn}
        setBtn={setBtn}
        btn1={btn1}
        setBtn1={setBtn1}
        btn2={btn2}
        setBtn2={setBtn2}
        btn3={btn3}
        setBtn3={setBtn3}
        btn4={btn4}
        setBtn4={setBtn4}
        btn5={btn5}
        setBtn5={setBtn5}
        btn6={btn6}
        setBtn6={setBtn6}
        btn7={btn7}
        setBtn7={setBtn7}
        counter={counter}
        setcount={setcount}
      />
      <Footer />
    </>
  );
}

export default App;
