import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import SampleA from "./components/SampleA";
import SampleB from "./components/SampleB";
import SampleC from "./components/SampleC";
import SampleD from "./components/SampleD";
import SampleE from "./components/SampleE";
import SampleF from "./components/SampleF";
import SampleG from "./components/SampleG";
import SampleH from "./components/SampleH";
import SampleI from "./components/SampleI";
import SampleJ from "./components/SampleJ";
import SampleK from "./components/SampleK";
import SampleL from "./components/SampleL";
import SampleM from "./components/SampleM";
import ExpandableText from "./components/SampleNExpandableText";

function App() {
  return (
    <div className="App">
      <SampleA />
      <hr />
      <SampleB />
      <hr />
      <h2>STRICT MODE (DEVELOPMENT MODE) </h2>
      <SampleC /> (Bad: is rendered 2x in dev; to show impure components)
      <hr />
      <SampleD /> (Good: is rendered 2x in dev; pure component displays correct
      count)
      <hr />
      <SampleE />
      <hr />
      <SampleF />
      <hr />
      <SampleG />
      <hr />
      <SampleH />
      <hr />
      <SampleI />
      <hr />
      <SampleJ />
      <hr />
      <SampleK />
      <hr />
      <SampleL />
      <hr />
      <SampleM />
      <hr />
      <ExpandableText maxChars={200}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
        sunt tempora suscipit consequatur placeat aspernatur officia fugit
        repellat, dolores ab, veniam tenetur blanditiis provident. Nihil
        reprehenderit necessitatibus provident, quae culpa suscipit enim ad
        veniam, quam temporibus, rerum nemo fugiat dolore unde ab atque
        exercitationem hic. Libero illo distinctio corporis dicta laboriosam
        natus, quam soluta incidunt? Ullam corrupti vero, ut, vitae accusantium,
        quas eius cum dicta magni iusto ex adipisci odio. Minus, dolorum!
        Possimus saepe corporis eligendi eveniet accusamus quaerat itaque. Iure
        aspernatur, sapiente corrupti dolorum quae beatae perspiciatis deserunt.
        Id explicabo facilis rerum. Dolorem nulla sunt quia perferendis vero
        minima laboriosam blanditiis rem nihil rerum ad voluptatibus corrupti
        libero aliquam velit, laudantium pariatur atque. Cumque nam voluptatibus
        commodi magni dolorum natus vero distinctio possimus saepe, ut quis
        ipsam, quas perferendis explicabo totam a quos alias minus, soluta
        minima delectus. Quibusdam saepe omnis sit, consequuntur dolorum amet
        officiis nam consectetur quos magni dolor soluta consequatur quam autem
        repellat eligendi eum voluptatibus ullam quidem dicta, asperiores
        assumenda possimus labore? Provident natus, explicabo debitis delectus
        accusantium quod architecto dignissimos id qui veniam fugit in,
        assumenda culpa excepturi pariatur sit ullam voluptate obcaecati
        exercitationem. Eaque fuga reiciendis harum alias officia architecto
        velit perferendis quasi!
      </ExpandableText>
    </div>
  );
}

export default App;
