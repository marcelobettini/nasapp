import "./App.css";

import { rovers } from '../rovers/rovers';
import Rover from "./components/Rover";
function App() {
  return (
    <>
      <Rover rover={rovers[0]} />
      <Rover rover={rovers[1]} />
      <Rover rover={rovers[2]} />
      <Rover rover={rovers[3]} />

    </>
  );
}

export default App;
