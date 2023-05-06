import { useState } from "react";

interface Props {
  cartItemsCount: number;
}
const SampleJNavBar = ({ cartItemsCount }: Props) => {
  return (
    <div>
      SampleJNavBar (child): Cart Qty{" "}
      <strong className="clr-lm">({cartItemsCount})</strong>
    </div>
  );
};

export default SampleJNavBar;
