import { useState } from "react";

const SampleH = () => {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Some Bug1", isFixed: false },
    { id: 2, title: "Some Bug2", isFixed: false },
  ]);
  const handleClick = () => {
    console.log("clicked");
    setBugs(
      //h.1 only creating a new object for id==1; rest use the same object as original ~bug
      bugs.map((bug) => (bug.id === 1 ? { ...bug, isFixed: true } : bug))
    );
    console.log(bugs);
  };
  return (
    <>
      SampleH <button onClick={handleClick}>update bug1</button>
      <br />
      {bugs.map((bug) => (
        <p key={bug.id}>
          {bug.id} | {bug.title} | {bug.isFixed ? "y" : "n"}
        </p>
      ))}
    </>
  );
};

export default SampleH;
