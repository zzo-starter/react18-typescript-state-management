import { useState } from "react";

const SampleG = () => {
  const [tags, setTags] = useState(["happy", "cheerful"]);
  const handleClick = () => {
    //g.1 add a tag
    setTags([...tags, "elated"]);

    //g.1 remove
    //get all tags which are not happy
    setTags(tags.filter((tag) => tag !== "happy"));

    //update
    setTags(tags.map((tag) => (tag == "cheerful" ? "thrilled" : tag)));
  };
  return (
    <div>
      SampleG Array<button onClick={handleClick}>click</button>
      <br />
      moods: {tags}
    </div>
  );
};

export default SampleG;
