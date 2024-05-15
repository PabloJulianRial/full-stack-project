import DishesList from "./components/DishesList/DishesList";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import { useState } from "react";
import { FormEvent } from "react";

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
    <div className="app">
      <Navbar
        checkedBoxes={checkedBoxes}
        searchTerm={searchTerm}
        handleInput={handleInput}
        handleCheckboxChange={handleCheckboxChange}
        handleCheckboxChangeRemove={handleCheckboxChangeRemove}
      />
      <DishesList />
    </div>
  );
}

export default App;
