import "./NavMenu.scss";

type NavMenuProps = {
  onClose: () => void;
  isMenuOpen: boolean;
  handleCheckboxChange: (name: string) => void;
  handleCheckboxChangeRemove: (name: string) => void;
};

const NavMenu = ({
  isMenuOpen,
  onClose,
  handleCheckboxChange,
  handleCheckboxChangeRemove,
}: NavMenuProps) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    if (checked) {
      handleCheckboxChange(name);
    } else {
      handleCheckboxChangeRemove(name);
    }
  };

  return (
    <div className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
      <p className="nav-menu__head">Search by</p>
      <i className="fa-solid fa-circle-xmark nav-cross" onClick={onClose}></i>
      <div className="nav-menu__item">
        <input
          className="nav-menu__input"
          type="checkbox"
          id="abv"
          name="abv"
          onChange={handleChange}
        />
        <label className="nav-menu__label" htmlFor="abv">
          ABV
        </label>
      </div>
      <div className="nav-menu__item">
        <input
          className="nav-menu__input"
          type="checkbox"
          id="classic"
          name="classic"
          onChange={handleChange}
        />
        <label className="nav-menu__label" htmlFor="Classic">
          Classic range
        </label>
      </div>
      <div className="nav-menu__item">
        <input
          className="nav-menu__input"
          type="checkbox"
          id="acidity"
          name="acidity"
          onChange={handleChange}
        />
        <label className="nav-menu__label" htmlFor="Acidity">
          Acidity
        </label>
      </div>
    </div>
  );
};

export default NavMenu;
