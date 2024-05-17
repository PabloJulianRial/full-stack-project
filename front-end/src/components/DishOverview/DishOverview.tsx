import DishResponse from "../../types/DishResponse";
import "./DishOverview.scss";
import { Link, useParams } from "react-router-dom";

type DishOverviewProps = {
  dishes: DishResponse[];
};

function DishOverview({ dishes }: DishOverviewProps) {
  const { dishId } = useParams();
  const dish = dishes.find((dish) => dish.id.toString() === dishId);
  if (dish == undefined) {
    return <p>couldn't find a dish with that id</p>;
  }

  return (
    <div className="overview-dish">
      <h3 className="overview-dish__head">{dish.dish}</h3>
      <div className="overview-dish__stats">
        <ul className="overview-dish__ingredients">
          <li>{dish.dishIngredients[0].ingredient_name}</li>
          <li>{dish.dishIngredients[1].ingredient_name}</li>
          <li>{dish.dishIngredients[2].ingredient_name}</li>
          <li>{dish.dishIngredients[3].ingredient_name}</li>
          <li>{dish.dishIngredients[4].ingredient_name}</li>
        </ul>
        <p>{dish.recipe.recipe}</p>
      </div>
      <p className="overview-dish__recipe"></p>
      <div className="overview-dish__img">
        <img src={dish.img_url} alt="" />
      </div>
      <div className="home-link__container">
        <Link className="home-link" to="/">
          Home
        </Link>
      </div>
    </div>
  );
}

export default DishOverview;
