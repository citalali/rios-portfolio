import "./App.css";
import ProjectList from "./components/ProjectList";
import rioCV from "./components/RioPajakCV2024.pdf";

function App() {
  return (
    <div>
      <div className="headerALink">
        <h1>Rio Pajak</h1>
      </div>
      <p>
        Hey! I'm Rio, a full-stack developer.
        <br></br>I am passionate about web development, design thinking, baking
        bread and solving problems.
        <br></br>
        Here you can find some of my projects, my CV and contact information.
      </p>
      <div className="App linkListDiv">
        <div className="linkList">
          <div className="links">
            <a href="https://github.com/citalali" className="link">
              GitHub
            </a>
          </div>
          <div className="links">
            <a href={rioCV} className="link" download="RioPajakCV.pdf">
              Resume
            </a>
          </div>
          <div className="links">
            <a href="mailto: rio.redips@gmail.com" className="link">
              Send Email
            </a>
          </div>
        </div>
      </div>
      <div className="App">
        <ProjectList />
      </div>
    </div>
  );
}

export default App;
