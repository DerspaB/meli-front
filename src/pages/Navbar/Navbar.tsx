import { InputSearch } from "../../components/InputSearch/InputSearch";
import "./styles.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <img src="./assets/Logo_ML.png" alt="logo" />
      <InputSearch />
    </div>
  );
};
