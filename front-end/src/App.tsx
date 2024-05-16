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
  const [dishes, setDishes] = useState<DishResponse[]>([]);

  const getDishes = async () => {
    const response = await fetch("http://localhost:8080/dishes");
    const dishesData = await response.json();
    setDishes(dishesData);
  };

  useEffect(() => {
    getDishes();
  }, []);

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchTerm(input);
  };
  console.log(dishes);

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
          checkedBoxes={checkedBoxes}
          searchTerm={searchTerm}
          handleInput={handleInput}
          handleCheckboxChange={handleCheckboxChange}
          handleCheckboxChangeRemove={handleCheckboxChangeRemove}
        />
        <Routes>
          <Route path="/" element={<DishesList />}></Route>
          <Route path="/dish/:dishId" element={<DishOverview />} />
        </Routes>
        <DishesList />
      </div>
    </BrowserRouter>
  );
};

export default App;
