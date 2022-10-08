import React, { useState, useEffect } from 'react';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { rovers } from '../rovers/rovers';
import Rover from "./components/Rover";
import RoverMobile from "./components/RoverMobile";
import Header from './components/Header';

import './App.css'
function App() {
  console.log('runs');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 550);
  const vwUpdate = () => {
    setIsMobile(window.innerWidth < 550)
  }
  useEffect(() => {
    window.addEventListener("resize", vwUpdate);
    return () => window.removeEventListener("resize", vwUpdate);
  }, []);

  {
    if (!isMobile) {
      return (
        <>
          <Header />
          <main className="container">
            <div className="row justify-content-around my-5">
              <Rover className="col-12 col-sm-6 " rover={rovers[0]} />
              <Rover className="col-12 col-sm-6 " rover={rovers[1]} />
              <Rover className="col-12 col-sm-6 " rover={rovers[2]} />
              <Rover className="col-12 col-sm-6 " rover={rovers[3]} />
            </div>
          </main>
        </>
      )
    } else return (
      <>
        <Header />
        <main className="container">
          <div className="row justify-content-around my-5">
            <RoverMobile className="col-12 col-sm-6 " rover={rovers[0]} />
            <RoverMobile className="col-12 col-sm-6 " rover={rovers[1]} />
            <RoverMobile className="col-12 col-sm-6 " rover={rovers[2]} />
            <RoverMobile className="col-12 col-sm-6 " rover={rovers[3]} />
          </div>
        </main>
      </>
    )
  }
}

export default App;
