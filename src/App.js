import "./App.css";
import Background from "./components/Background";
import Loading from "./components/Loading";
import Nav from "./components/Nav";
import Moon from "./components/Moon";
import About from "./components/About";
import { useEffect, useState } from "react";
import Content from "./components/Content";

function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setInterval(() => {
      show();
    }, 2500);
  }, []);

  const show = () => {
    setReady(true);
  };
  return (
    <>
      <Moon />
      <div className={ready ? "showContent" : "noContent"}>
        <Content/>
      </div>
    </>
  );
}

export default App;
