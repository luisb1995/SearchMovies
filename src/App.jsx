import Form from "./components/Form";
import Dark_mode from "./components/Dark_mode.jsx";
import "./App.css";
import Peliculas from "./components/Peliculas";
import { useEffect, useState} from "react";

function App() {
  const [text, setText] = useState("batman");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(()=>{
      if(localStorage){
        const storedIsDarkMode = localStorage.getItem('isDarkMode');
          if(storedIsDarkMode==="true"){
            const estado = document.querySelector(".container");
            estado.classList.add("active");
            setDarkMode(true)
          }
      }
  },[])

  return (
    <div className="container">
      <header className="header">
        <Dark_mode darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>
      <section className="formu">
        <Form text={text} setText={setText} />
      </section>
      <Peliculas text={text} />
    </div>
  );
}

export default App;
