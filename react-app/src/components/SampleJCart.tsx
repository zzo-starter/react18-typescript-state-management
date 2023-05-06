import { useState } from "react";

interface Props {
  cartItems: string[];
  onClear: () => void;
}
const SampleJCart = ({ cartItems, onClear }: Props) => {
  return (
    <div>
      SampleJCart (child)
      <br />
      <ul>
        {cartItems.map((item) => (
          <li key={item} className="clr-lm">
            {item}
          </li>
        ))}
      </ul>
      <button onClick={onClear}>clear cart</button>
    </div>
  );
};

export default SampleJCart;
