import "./Dish.scss";

type DishProps = {
  name: string;
  ingredient1: string;
  ingredient2: string;
  ingredient3: string;
  ingredient4: string;
  ingredient5: string;
  recipe: string;
};

const Dish = ({
  name,
  ingredient1,
  ingredient2,
  ingredient3,
  ingredient4,
  ingredient5,
  recipe,
}: DishProps) => {
  console.log(name);

  return (
    <div className="dish">
      <div className="dish__container">
        <div className="dish__info">
          <h3 className="dish__name">{name} </h3>
          <div className="dish__recipe">
            <p>{ingredient1}</p>
            <p>{ingredient2}</p>
            <p>{ingredient3}</p>
            <p>{ingredient4}</p>
            <param>{ingredient5}</param>
          </div>
        </div>
        <img src="src\assets\duck alorange.jpg"></img>
      </div>
    </div>
  );
};

export default Dish;
