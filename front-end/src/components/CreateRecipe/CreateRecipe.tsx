import "./CreateDish.scss";
import Form from "../Form/Form";
import DishRequest from "../..//types/DishRequest";
// import OptionType from "../../types/OptionType";
import { useNavigate } from "react-router-dom";

type CreateDishProps = {};

const CreateDish = ({}: CreateDishProps) => {
  const navigate = useNavigate();

  const handleSubmit = async (newDish: DishRequest) => {
    const result = await fetch("http://localhost:8080/dish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newDish),
    });

    if (result.ok) {
      alert("Dish added");
      const dish = await result.json();
      navigate("/dish/edit/" + dish.id, { state: dish });
    } else {
      const message = await result.text();
      alert(message);
    }
  };

  const defaultFormState = {
    id: -1,

    dish: "",
  };
  return (
    <section className="create-dish">
      <h2 className="create-dish__title">Create a Greeting</h2>
      <Form
        handleSubmit={handleSubmit}
        defaultFormState={defaultFormState}
        // formTitle="Add A New dish"
      />
    </section>
  );
};

export default CreateDish;
