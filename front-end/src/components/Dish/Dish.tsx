import Ingredient from "../../types/Ingredient";
import "./Dish.scss";

type DishProps = {
  name: string;
  recipe: string;
  img_url: string;
};

const Dish = ({ name, recipe, img_url }: DishProps) => {
  return (
    <div className="dish">
      <div className="dish__container">
        <div className="dish__info">
          <h2 className="dish__name">{name} </h2>
          <div className="dish__recipe">
            <p>{recipe}</p>
          </div>
        </div>
        <img src={img_url}></img>
      </div>
    </div>
  );
};

export default Dish;
