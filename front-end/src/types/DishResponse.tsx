import Ingredient from "./Ingredient";

type DishResponse = {
  id: number;
  dish: string;
  img_url: string;
  dishIngredients: Ingredient[];
  recipe: {
    id: number;
    recipe: string;
  };
};

export default DishResponse;
