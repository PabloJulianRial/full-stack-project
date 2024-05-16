import "./NavMenu.scss";

type NavMenuProps = {
  ingredients: string[];
  onClose: () => void;
  isMenuOpen: boolean;
  handleCheckboxChange: (name: string) => void;
  handleCheckboxChangeRemove: (name: string) => void;
};

const NavMenu = ({
  ingredients,
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
      <i className="fa-solid fa-circle-xmark nav-cross" onClick={onClose}></i>
      <div className="nav-menu__items">
        {ingredients.map((ingredient) => {
          return <div className="nav-menu__ingredient">
            <input
          className="nav-menu__input"
          type="checkbox"
          id="ingredient"
          name="ingredient"
          onChange={handleChange}
        />
          </div>;
        })}
        
      </div>
    </div>
  );
};

export default NavMenu;
