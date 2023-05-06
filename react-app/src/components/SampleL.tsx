import { useState } from "react";

const SampleL = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushrooms"],
  });
  const handleClick = () => {
    setPizza({
      ...pizza,
      toppings: [...pizza.toppings, "cheese"],
    });
  };
  return (
    <div>
      SampleL - add to an array in object
      <br />
      <button onClick={handleClick}>add topping</button>
      <br />
      pizza toppings:
      <ul>
        {pizza.toppings.map((topping) => (
          <li key={topping}> {topping}</li>
        ))}
      </ul>
    </div>
  );
};

export default SampleL;
