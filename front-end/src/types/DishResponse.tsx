type DishResponse = {
  id: number;
  dish: string;
  ingredient1: string;
  ingredient2: string;
  ingredient3: string;
  ingredient4: string;
  ingredient5: string;
  recipe: {
    id: number;
    recipe: string;
  };
};

export default DishResponse;
