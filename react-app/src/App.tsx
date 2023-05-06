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
    </div>
  );
}

export default App;
