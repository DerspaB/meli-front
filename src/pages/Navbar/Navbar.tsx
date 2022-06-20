import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { InputSearch } from "../../components/InputSearch/InputSearch";
import "./styles.css";

export const Navbar = () => {


  const navigate = useNavigate()

  const [search, setSearch] = useState('')

  const handleOnchange = (event: React.ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    navigate({
      pathname: "/items",
      search: `?search=${search}`
    });
  }

  return (
    <div className="navbar">
      <div className="wrapper">
        <img src="../assets/Logo_ML.png" alt="logo" />
        <InputSearch handleChange={handleOnchange} value={search} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};
