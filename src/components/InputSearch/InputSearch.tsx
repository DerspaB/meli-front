import "./styles.css";

export const InputSearch = () => {
  return (
    <div className="inputContainer">
      <input type="text" placeholder="Nunca dejes de buscar" />
      <div className="search-icon">
        <img src="./assets/ic_Search.png" alt="search-icon" />
      </div>
    </div>
  );
};
