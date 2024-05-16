import "./DishOverview.scss";
import { Link } from "react-router-dom";

function DishOverview() {
  return (
    <div className="overview-dish">
      <h3 className="overview-dish__head">Dish</h3>
      <div className="overview-dish__stats">
        <ul className="overview-dish__ingredients">
          <li>ingredient</li>
          <li>ingredient</li>
          <li>ingredient</li>
          <li>ingredient</li>
          <li>ingredient</li>
        </ul>
        <p>pairing</p>
      </div>
      <p className="overview-dish__recipe">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui neque
        officia eos blanditiis repudiandae saepe distinctio natus, architecto
        veniam enim dolores expedita eveniet eaque incidunt laudantium ad
        deleniti quae provident, repellat explicabo doloremque quisquam labore
        debitis iste. Consectetur illo dolore placeat? Cum laudantium nesciunt
        atque eveniet facilis aut odit quia.
      </p>
      <div className="overview-dish__img">
        <img src="" alt="" />
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
