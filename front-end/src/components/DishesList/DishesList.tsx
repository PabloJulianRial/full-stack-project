import "./DishesList.scss";
import Dish from "../Dish/Dish";
import { Link } from "react-router-dom";

const DishesList = () => {
  return (
    <div className="dishes-list">
      <Link className="dish-link" to={`/beer/`} key="1">
        <Dish name="name" image_url="url" recipe="recipe" />
      </Link>
    </div>
  );
};
export default DishesList;
