import "./Dish.scss";

const Dish = () => {
  return (
    <div className="dish">
      <div className="dish__container">
        <div className="dish__info">
          <h3 className="dish__name">Dish</h3>
          <ul className="ingredients-list">
            <li className="ingredient">ingredient</li>
            <li className="ingredient">ingredient</li>
            <li className="ingredient">ingredient</li>
            <li className="ingredient">ingredient</li>
            <li className="ingredient">ingredient</li>
          </ul>
        </div>
        <img src="src\assets\duck alorange.jpg"></img>
      </div>
    </div>
  );
};

export default Dish;
