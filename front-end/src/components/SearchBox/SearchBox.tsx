import "./SearchBox.scss";
import { useState } from "react";
import { FormEventHandler } from "react";

type SearchBoxProps = {
  searchTerm: string;
  handleInput: FormEventHandler<HTMLInputElement>;
};

const SearchBox = ({ searchTerm, handleInput }: SearchBoxProps) => {
  const [showSearchBar, setShowSearchBar] = useState<boolean>(false);
  const toggleSearchBox = () => {
    if (!showSearchBar) {
      setShowSearchBar(true);
    } else {
      setShowSearchBar(false);
    }
  };

  let searchBarClass = `search-box__input search-box__input--${showSearchBar}`;

  return (
    <div className="search-box">
      <input
        type="text"
        className={searchBarClass}
        value={searchTerm}
        onInput={handleInput}
      />
      <i
        className="fa-solid fa-magnifying-glass search-box__icon"
        onClick={toggleSearchBox}
      ></i>
    </div>
  );
};

export default SearchBox;
