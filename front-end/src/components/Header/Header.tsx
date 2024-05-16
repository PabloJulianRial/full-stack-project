import "../Header/Header.scss";
import NavMenu from "../navMenu/NavMenu";
import { useState } from "react";

type HeaderProps = {
  handleCheckboxChange: (name: string) => void;
  handleCheckboxChangeRemove: (name: string) => void;
};

function Header({
  handleCheckboxChange,
  handleCheckboxChangeRemove,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header">
      <NavMenu
        isMenuOpen={isMenuOpen}
        onClose={toggleNav}
        handleCheckboxChange={handleCheckboxChange}
        handleCheckboxChangeRemove={handleCheckboxChangeRemove}
      />

      <i className="fa-solid fa-bars header__menu " onClick={toggleNav}></i>

      <div className="header__head">
        <h4 className="header__head--title">Recipe finder</h4>
      </div>
      <div className="header__button">add a recipe</div>
    </div>
  );
}

export default Header;
