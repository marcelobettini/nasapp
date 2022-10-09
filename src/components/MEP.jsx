import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import "./MEP.css";
import Nav from "react-bootstrap/Nav";
import MEP1 from "./MEP1";
import MEP2 from "./MEP2";
import MEP3 from "./MEP3";
import MEP4 from "./MEP4";
import MEP5 from "./MEP5";
import MEP6 from "./MEP6";
import MEP7 from "./MEP7";
import { Container } from "react-bootstrap";

const MEP = () => {
  const [component, setComponent] = useState(<MEP1 />);
  return (
    <div className="row mepContainer bg-light py-5">
      <div className="col col-sm-5">
        <h2 className="display-6 mb-4">Mars Exploration Program</h2>
        <Navbar className="nav" bg="light">
          <Container>
            <Nav className="flex-column">
              <Nav.Link
                onClick={() => setComponent((prev) => (prev = <MEP1 />))}
              >
                mission statement
              </Nav.Link>
              <Nav.Link
                onClick={() => setComponent((prev) => (prev = <MEP2 />))}
              >
                about the program
              </Nav.Link>
              <Nav.Link
                onClick={() => setComponent((prev) => (prev = <MEP3 />))}
              >
                organization
              </Nav.Link>
              <Nav.Link
                onClick={() => setComponent((prev) => (prev = <MEP4 />))}
              >
                why Mars?
              </Nav.Link>
              <Nav.Link
                onClick={() => setComponent((prev) => (prev = <MEP5 />))}
              >
                research programs
              </Nav.Link>
              <Nav.Link
                onClick={() => setComponent((prev) => (prev = <MEP6 />))}
              >
                planetary resources
              </Nav.Link>
              <Nav.Link
                onClick={() => setComponent((prev) => (prev = <MEP7 />))}
              >
                research programs
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
      <div className="col col-sm-7 componentContainer">{component}</div>
    </div>
  );
};

export default MEP;
