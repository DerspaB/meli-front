import "./styles.css";


interface InputSearchProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}

export const InputSearch = ({ handleChange, value, handleSubmit }: InputSearchProps) => {
  return (
    <div className="inputContainer">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={value} type="text" placeholder="Nunca dejes de buscar" />
      </form>
      <div className="search-icon">
        <img src="../assets/ic_Search.png" alt="search-icon" />
      </div>
    </div>
  );
};
