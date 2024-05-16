import DishesList from "./components/DishesList/DishesList";
import Navbar from "./components/Navbar/Navbar";
import DishOverview from "./components/DishOverview/DishOverview";
import "./App.scss";
import { useState } from "react";
import { FormEvent } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [checkedBoxes, setCheckedBoxes] = useState<string[]>([]);

  const handleInput = (event: FormEvent<HTMLInputElement>) => {
    const input = event.currentTarget.value.toLowerCase();
    setSearchTerm(input);
  };

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
      </div>
    </BrowserRouter>
  );
}

export default App;
