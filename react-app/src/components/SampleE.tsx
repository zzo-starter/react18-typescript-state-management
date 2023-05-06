import { useState } from "react";

const SampleE = () => {
  const [drink, setDrink] = useState({
    title: "Americano",
    size: "tall",
    price: 5,
  });
  const handleClick = () => {
    // we dont update properties directly, but create a brand new object
    // and set to that
    // drink.price =6;
    // setDrink(drink);
    //===== correct option 1: but inneficient setting all properties manually
    const newDrink1 = { title: drink.title, size: drink.size, price: 6 };
    setDrink(newDrink1);

    // === correct option 2: Use spread operator to copy object
    const newDrink2 = { ...drink, price: 7 };
    setDrink(newDrink2);

    // ===  best option 3: no need to create a var
    setDrink({ ...drink, price: 8 });
  };
  return (
    <div>
      SampleE Object
      <br />
      title: {drink.title} | size: {drink.size} | price: {drink.price}
      <button onClick={handleClick}>Click To Update Price of Drink</button>
    </div>
  );
};

export default SampleE;
