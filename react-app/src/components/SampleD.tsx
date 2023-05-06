//let count = 0; //c.1 bad practice

const SampleD = () => {
  let count = 0; //c.1 best to place within component scope to produce predicatable results
  count++;
  return (
    <div>
      SampleD Variable
      <br />
      Message count:{count}
    </div>
  );
};

export default SampleD;
