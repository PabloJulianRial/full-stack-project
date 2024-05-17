import "./DishesList.scss";
import Dish from "../Dish/Dish";
import DishResponse from "../../types/DishResponse";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type DishesListProps = {
  dishes: DishResponse[];
  searchTerm: string;
};

const DishesList = ({ dishes, searchTerm }: DishesListProps) => {
  // const [dishes, setDishes] = useState<DishResponse[]>([]);

  // const getDishes = async () => {
  //   const response = await fetch("http://localhost:8080/dishes");
  //   const dishesData = await response.json();
  //   setDishes(dishesData);
  // };

  // useEff
  // }, []);
  console.log(dishes);

  const filteredDishes = dishes.filter((dish) => {
    return dish.dish.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="dishes-list">
      {filteredDishes.map((dish) => {
        return (
          <Link className="dish-link" to={`/dish/${dish.id}`} key={dish.id}>
            <Dish
              key={dish.id}
              name={dish.dish}
              img_url={dish.img_url}
              recipe={dish.recipe.recipe}
            />
          </Link>
        );
      })}
    </div>
  );
};
export default DishesList;
