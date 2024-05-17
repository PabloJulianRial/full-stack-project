import DishesList from "./components/DishesList/DishesList";
import Navbar from "./components/Navbar/Navbar";
import DishOverview from "./components/DishOverview/DishOverview";
import "./App.scss";
import { useEffect, useState } from "react";
import { FormEvent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DishResponse from "./types/DishResponse";

const App = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [checkedBoxes, setCheckedBoxes] = useState<string[]>([]);
  const [ingredients, setIngredients] = useState<string[]>([]);

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchTerm(input);
  };

  const getIngredients = async () => {
    const response = await fetch("http://localhost:8080/ingredients");
    const ingredientsData = await response.json();
    setIngredients(ingredientsData);
  };

  const [dishes, setDishes] = useState<DishResponse[]>([]);

  const getDishes = async () => {
    const response = await fetch("http://localhost:8080/dishes");
    const dishesData = await response.json();
    setDishes(dishesData);
  };

  useEffect(() => {
    getDishes();
  }, []);
  console.log(dishes[0]);

  useEffect(() => {
    getIngredients();
  }, []);

  const handleCheckboxChange = (name: string) => {
    setCheckedBoxes((currentCheckedBoxes) => [...currentCheckedBoxes, name]);
  };
  const handleCheckboxChangeRemove = (name: string) => {
    setCheckedBoxes((prevCheckedBoxes) =>
      prevCheckedBoxes.filter((item) => item !== name)
    );
  };
  return (
    <BrowserRouter basename="/">
      <div className="app">
        <Navbar
          ingredients={ingredients}
          checkedBoxes={checkedBoxes}
          searchTerm={searchTerm}
          handleInput={handleInput}
          handleCheckboxChange={handleCheckboxChange}
          handleCheckboxChangeRemove={handleCheckboxChangeRemove}
        />
        <Routes>
          <Route
            path="/"
            element={<DishesList searchTerm={searchTerm} dishes={dishes} />}
          ></Route>
          <Route
            path="/dish/:dishId"
            element={<DishOverview dishes={dishes} />}
          />
        </Routes>
        {/* <DishesList dishes={dishes} /> */}
      </div>
    </BrowserRouter>
  );
};

export default App;
