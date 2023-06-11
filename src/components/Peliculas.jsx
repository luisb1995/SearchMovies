import { useEffect } from "react";
import { useState, useRef } from "react";
import "../App.css";

function Peliculas({ text }) {
  const [pelis, setPelis] = useState([]);
  const input = useRef(text);

  async function buscar() {

      if (input.current.value == text) return;
      const res = await fetch(`https://www.omdbapi.com/?apikey=30048832&s=${text}`);
      const data = await res.json();
      const { Search } = data;
      setPelis(Search);
      input.current = text;
  }

  
  useEffect(()=>{
        buscar();
  },[text])


 


  return (
    <div className="peliculas">
      <ul className="movies">
        {pelis ? (
          pelis.map((movie) => (
            <li className="movie" key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>
              <img src={movie.Poster} alt={movie.Title} />
            </li>
          ))
        ) : (
          <p className="noresult">No hay resultados para tu busqueda</p>
        )}
      </ul>
    </div>
  );
}

export default Peliculas;
