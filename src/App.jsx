import "./App.css";


import { rovers } from '../rovers/rovers';
import Rover from "./components/Rover";
import './App.css'
function App() {
  return (
    <>
      <main className="container">
        {/* <Rover rover={rovers[0]} /> */}
        {/* {/* <Rover rover={rovers[1]} /> */}
        {/* <Rover rover={rovers[2]} /> */}
        <Rover rover={rovers[3]} />
      </main>

    </>
  );
}

export default App;
