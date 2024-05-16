import "./DishesList.scss";
import Dish from "../Dish/Dish";
import DishResponse from "../../types/DishResponse";
import { useEffect, useState } from "react";

const DishesList = () => {
  const [dishes, setDishes] = useState<DishResponse[]>([]);

  const getDishes = async () => {
    const response = await fetch("http://localhost:8080/dishes");
    const dishesData = await response.json();
    setDishes(dishesData);
  };

  useEffect(() => {
    getDishes();
  }, [dishes]);
  return (
    <div className="dishes-list">
      {dishes.map((dish) => {
        return (
          <Dish
            key={dish.id}
            name={dish.dish}
            ingredient1={dish.ingredient1}
            ingredient2={dish.ingredient2}
            ingredient3={dish.ingredient3}
            ingredient4={dish.ingredient4}
            ingredient5={dish.ingredient5}
            recipe={dish.recipe.recipe}
          />
        );
      })}
    </div>
  );
};
export default DishesList;
