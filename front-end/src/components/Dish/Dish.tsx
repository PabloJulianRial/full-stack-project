import "./Dish.scss";

type DishProps = {
  name: string;

  image_url: string;

  recipe: string;
};

const Dish = ({ name, image_url, recipe }: DishProps) => {
  return (
    <div className="dish">
      <div className="dish__container">
        <div className="dish__info">
          <h3 className="dish__name">Dish ${name}</h3>
          <div className="dish__recipe">
            ${recipe}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
            libero atque ea modi voluptas obcaecati, culpa similique in non
            commodi, nesciunt nam aperiam. Voluptatum qui obcaecati veritatis
            nihil blanditiis voluptatem. Eos placeat, nam amet sed, deserunt
            suscipit accusamus rerum distinctio adipisci est et qui explicabo
            magnam doloremque ratione exercitationem dolor.
          </div>
        </div>
        <img src="src\assets\duck alorange.jpg">${image_url}</img>
      </div>
    </div>
  );
};

export default Dish;
