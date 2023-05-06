import { useState } from "react";

interface Props {}
const SampleK = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Niko",
    },
  });
  const handleClick = () => {
    //set user name to something else
    setGame({ ...game, player: { ...game.player, name: "Kotek" } });
    useState(game);
  };
  return (
    <div>
      SampleK excercise- update name
      <br />
      <button onClick={handleClick}>update name</button>
      <br />
      id:{game.id} name:{game.player.name}
    </div>
  );
};

export default SampleK;
