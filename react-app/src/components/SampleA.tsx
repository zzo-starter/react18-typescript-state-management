import { useState } from "react";

const SampleA = () => {
  //=========TOP LEVEL (first to exec)
  //a.3 [false, true] ~ React stores state by ORDER; not concerned abt var names
  const [isVisible, setVisibility] = useState(false); // a.3 state-hook [top-level]
  const [isApproved, setApproved] = useState(true); // a.3 state-hook [top-level]

  //========= LOW LEVEL
  const count = 0; // a.2 not visible outside component
  const handleClick = () => {
    // a.1
    setVisibility(true);
    //setName
    // ...
    //setABC
    console.log("is-visible", isVisible);
    console.log("count:", count);
  };

  return (
    <div className="App">
      SampleA <br />
      <button onClick={handleClick}>Show</button>
    </div>
  );
};

export default SampleA;
