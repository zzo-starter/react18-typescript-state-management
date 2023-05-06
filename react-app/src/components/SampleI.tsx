import { useState } from "react";
import produce from "immer"; //import produce function

const SampleI = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Some Bug1", isFixed: false },
    { id: 2, title: "Some Bug2", isFixed: false },
  ]);
  const handleClick = () => {
    console.log("clicked");

    setBugs(
      //i.1 draft is a proxy of the object we are modifying
      //then use syntax as regular mutable JS
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1); //search for bug w id of 1
        if (bug) bug.isFixed = true;
      })
    );
    console.log(bugs);
  };
  return (
    <>
      SampleI (immer) <button onClick={handleClick}>update bug1</button>
      <br />
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.id} | {bug.title} | {bug.isFixed ? "y" : "n"}
        </p>
      ))}
    </>
  );
};

export default SampleI;
