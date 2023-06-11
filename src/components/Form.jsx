import "../App.css";
import debounce from 'lodash/debounce';

function Form({ text, setText }) {
  
  const debouncedSearch = debounce(handleChange, 500);

  function handleChange(event) {
    event.preventDefault();
    setText(event.target.value)
  }

  return (
    <div className="formulario">
      <h1>Buscador de Películas</h1>
      
      <form onSubmit={handleChange}>
        <label className="lab">
          Pelicula:
          <input
            name="text"
            required={true}
            minLength={4}
            onChange={debouncedSearch}
            type="text"
            placeholder="john wick,the panther...."
          />
        </label>

        <button className="buscar" type="submit">
          Buscar
        </button>
      </form>
    </div>
  );
}

export default Form;
