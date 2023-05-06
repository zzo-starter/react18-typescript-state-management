let count = 0; //c.1 bad practice; erroneous count will show when rendered 2x

const SampleC = () => {
  count++;
  return (
    <div>
      SampleC Variable <br />
      Message count:{count}
    </div>
  );
};

export default SampleC;
