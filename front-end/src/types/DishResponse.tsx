type DishResponse = {
  id: number;
  dish: string;

  recipe: {
    id: number;
    recipe: number;
  };
};

export default DishResponse;
