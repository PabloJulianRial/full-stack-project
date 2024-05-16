import Header from "../Header/Header";
import SearchBox from "../SearchBox/SearchBox";
import "./Navbar.scss";
import { FormEventHandler } from "react";

type NavbarProps = {
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>;
  handleCheckboxChange: (name: string) => void;
  handleCheckboxChangeRemove: (name: string) => void;
  checkedBoxes: string[];
  ingredients: string[];
};

function Navbar({
  ingredients,
  handleCheckboxChangeRemove,
  searchTerm,
  handleInput,
  handleCheckboxChange,
}: NavbarProps) {
  return (
    <div className="navbar">
      <Header
        handleCheckboxChange={handleCheckboxChange}
        handleCheckboxChangeRemove={handleCheckboxChangeRemove}
        ingredients={ingredients}
      />
      <SearchBox searchTerm={searchTerm} handleInput={handleInput} />
    </div>
  );
}
export default Navbar;
