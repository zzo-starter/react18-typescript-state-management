import { useState } from "react";
import SampleJNavBar from "./SampleJNavBar";
import SampleJCart from "./SampleJCart";

const SampleJ = () => {
  const [cartItems, setCartItems] = useState(["Product1", "Product2"]);
  const handleClear = () => {
    setCartItems([]);
  };
  return (
    <div>
      SampleJ Cart Parent (~App)
      <div className="col-12 b-1">
        <SampleJNavBar cartItemsCount={cartItems.length} />
      </div>
      <div className="col-12 b-1">
        <SampleJCart cartItems={cartItems} onClear={handleClear} />
      </div>
    </div>
  );
};

export default SampleJ;
