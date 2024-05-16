import "./Dish.scss";

// type DishProps = {
//   name: string;

//   image_url: string;

//   recipe: string;
// };

// const Dish = ({ name, image_url, recipe }: DishProps) => {
const Dish = () => {
  return (
    <div className="dish">
      <div className="dish__container">
        <div className="dish__info">
          <h3 className="dish__name">Dish </h3>
          <ul className="dish__recipe">
            <li>ingredient</li>
            <li>ingredient</li>
            <li>ingredient</li>
            <li>ingredient</li>
            <li>ingredient</li>
          </ul>
        </div>
        <img src="src\assets\duck alorange.jpg"></img>
      </div>
    </div>
  );
};

export default Dish;
