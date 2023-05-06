import { useState } from "react";

const SampleM = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product-1", quantity: 10 },
      { id: 2, title: "Product-2", quantity: 12 },
      { id: 3, title: "Product-3", quantity: 13 },
    ],
  });
  const handleClick = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };
  return (
    <div>
      SampleM <button onClick={handleClick}>update qty of item1</button>
      <br />
      items:
      {cart.items.map((item) => (
        <li key={item.id}>
          {item.id} | {item.title} | {item.quantity}
        </li>
      ))}
    </div>
  );
};

export default SampleM;
