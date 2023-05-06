import { useState } from "react";

const SampleF = () => {
  const [customer, setCustomer] = useState({
    name: "Elon",
    address: {
      city: "Palo Alto",
      zipCode: 94020,
    },
  });
  const handleClick = () => {
    //f.1
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94021 }, //spread operator shallow-copies, so need to iterate manually =(
    });
  };
  return (
    <div>
      SampleF Object<button onClick={handleClick}>update customer</button>
      <br />
      customer: {customer.name} | {customer.address.city} |{" "}
      {customer.address.zipCode}
    </div>
  );
};

export default SampleF;
