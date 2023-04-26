import "./App.css";
import ProjectList from "./components/ProjectList";
import rioCV from "./components/RioPajakCV.pdf";

function App() {
  return (
    <div>
      <div className="headerALink">
        <h1>Rio Pajak</h1>
      </div>
      <p>Hey! I'm Rio, a frontend developer.</p>
      <h2 className="titles">About</h2>
      <div className="App linkListDiv">
        <div className="linkList">
          <a href="https://github.com/citalali" className="link">
            GitHub
          </a>
          <a href={rioCV} className="link" download="RioPajakCV.pdf">
            Resume
          </a>
          <a href="mailto: rio.redips@gmail.com" className="link">
            Send Email
          </a>
        </div>
      </div>
      <h2 className="titles">Projects</h2>
      <div className="App">
        <ProjectList />
      </div>
    </div>
  );
}

export default App;
