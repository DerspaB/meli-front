import "./styles.css";

// se crea la interfaz de InputSearchProps el cual nos permite darle
// un tipo a cada propiedad que recibira nuestro componente por propiedades

interface InputSearchProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const InputSearch = ({ handleChange, value, handleSubmit }: InputSearchProps) => {
  return (
    //se crea el contenedor de los elementos del input
    <div className="inputContainer">
      {/* creo el formulario para poder capturar el evento submit y realizar la busqueda correspondiente */}
      <form onSubmit={handleSubmit}>
        {/* se crea el input y se le pasa la funcion handleChange para modificar los valore escritos en tiempo real */}
        <input onChange={handleChange} value={value} type="text" placeholder="Nunca dejes de buscar" />
      </form>
      {/* div contenedor del icono de busqueda */}
      <div className="search-icon">
        <img src="../assets/ic_Search.png" alt="search-icon" />
      </div>
    </div>
  );
};
