import logo from "./logo.svg";
import "./App.css";
import { Button } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <div className="page-1-container">
        <div className="avengers-right-container animated fadeInRight"></div>

        <div className="avengers-left-container animated fadeInLeft">
          <div className="fontalicious project-title">Dogvengers</div>
          <div className="project-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Magna
            fermentum iaculis eu non diam phasellus. Amet aliquam id diam
            maecenas. Ac feugiat sed lectus vestibulum. Eros donec ac odio
            tempor orci dapibus ultrices. Amet est placerat in egestas erat
            imperdiet sed euismod. A scelerisque purus semper eget duis at
            tellus at urna. Massa eget egestas purus viverra accumsan. Ut sem
            viverra aliquet eget sit amet tellus cras adipiscing. Lectus proin
            nibh nisl condimentum. Viverra nam libero justo laoreet sit amet.
            Quis vel eros donec ac odio tempor orci dapibus ultrices. Ut diam
            quam nulla porttitor massa. Dictum at tempor commodo ullamcorper a.
            Eget gravida cum sociis natoque.
          </div>
          <div className="project-description-buttons">
            <Button id="read-docs" className="proj-desc-btn">
              Read Docs
            </Button>
            <Button id="get-started" className="proj-desc-btn">
              Get Started
            </Button>
          </div>
        </div>
      </div>
      <div className="page-2-container">
        </div>
    </div>
  );
}

export default App;
