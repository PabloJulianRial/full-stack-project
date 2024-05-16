import { ChangeEvent, FormEvent, useState } from "react";
import "./Form.scss";
import DishRequest from "../../types/DishRequest";
// import OptionType from "../../types/OptionType";
import Select from "../Select/Select";

type FormProps = {
  defaultFormState: DishRequest;
  //   formTitle: string;
  handleSubmit: (dish: DishRequest) => void;
  //   users: OptionType[];
  //   countries: OptionType[];
};

const Form = ({
  defaultFormState,
  handleSubmit,
}: //   formTitle,
//   users,
//   countries,
FormProps) => {
  const [dish, setDish] = useState<DishRequest>(defaultFormState);

  const handleValidation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (Object.values(dish).some((value) => !value)) {
      alert("Missing content, unable to proceed");
      return;
    }

    handleSubmit(dish);
  };

  const handleInput = (
    event: FormEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>,
    key: string
  ) => setDish({ ...dish, [key]: event.currentTarget.value });

  return (
    <div className="form-container">
      {/* <h2 className="form-container__title">{formTitle}</h2> */}
      <form className="form-container__form" onSubmit={handleValidation}>
        <Select
          labelText={"Select User : "}
          label={"userId"}
          //   options={users}
          onChange={(event) => handleInput(event, "userId")}
          //   defaultOption={"---"}
          //   defaultValue={dish.userId.toString()}
        />
        <Select
          labelText={"Select Country : "}
          label={"countryId"}
          //   options={countries}
          onChange={(event) => handleInput(event, "countryId")}
          //   defaultOption={"---"}
          // //   defaultValue={dish.countryId.toString()}
        />
        <label htmlFor="dish">Dish : </label>
        <input
          id="dish"
          className="form-container__input"
          type="text"
          placeholder="dish"
          value={dish.dish}
          onInput={(event) => handleInput(event, "dish")}
        />
        <label htmlFor="nationality">Nationality : </label>
        <input
          id="nationality"
          className="form-container__input"
          type="text"
          placeholder="nationality"
          //   value={dish.nationality}
          onInput={(event) => handleInput(event, "nationality")}
        />
        <button type="submit" className="form-container__button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
