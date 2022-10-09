import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { rovers } from "../rovers/rovers";
import Rover from "./components/Rover";
import Header from './components/Header';
import Main from './components/Main';
import MainMobile from './components/MainMobile';
import Synopsis from './components/Synopsis'

import "./App.css";
function App() {
  return (
    <>
      <Main />
      <Header />
      <section className="container">
        <Synopsis />
        <div id="rovers"></div>
        <h1 className="text-center explorersTtl mt-5">explorers of a new world</h1>
        <div className="row justify-content-around my-5">
          <Rover className="col-12 col-sm-6 " rover={rovers[0]} />
          <Rover className="col-12 col-sm-6 " rover={rovers[1]} />
          <Rover className="col-12 col-sm-6 " rover={rovers[2]} />
          <Rover className="col-12 col-sm-6 " rover={rovers[3]} />
        </div>
      </section>
    </>
  );

}


export default App;
