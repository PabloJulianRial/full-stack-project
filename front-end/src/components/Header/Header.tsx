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
        <h2 className="header__head--title">Recipe finder</h2>

        <i className="fa-solid fa-hat-chef header__head--img"></i>
      </div>
    </div>
  );
}

export default Header;
