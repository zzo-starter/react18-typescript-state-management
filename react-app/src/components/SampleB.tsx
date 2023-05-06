import { useState } from "react";

const SampleB = () => {
  const [firstName, setFirstName] = useState("Elon"); //x
  const [lastName, setLastName] = useState("Musk"); //y
  const [isLoading, setLoading] = useState(true); //z

  //b.2 ; OBJECT preferred over x & y separately
  const [person, setPerson] = useState({
    firstName: "Elon",
    lastName: "Musk",
    contact: {
      email: "elon@tesla.com",
      //b.3
      address: {
        streetName: "123 main street",
        city: "Palo Alto",
      },
    },
  });

  //b.1  no need to use a State Hook; is redundant
  const fullName = firstName + " " + lastName;

  return (
    <div>
      SampleB Vars vs Objects
      <br /> Render Fullname option 1: {firstName} {lastName}
      <br />
      Render Fullname option 2: {fullName}
      <br />
      Render Fullname option 3: {person.firstName} {person.lastName}
    </div>
  );
};

export default SampleB;
