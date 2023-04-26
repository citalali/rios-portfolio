import React from "react";

function Project(props) {
  return (
    <div className="Project">
      <h2 className="Title">{props.title}</h2>
      <div className="ButtonDiv">
        <a className="Text LiveButton Button" href={props.fileLink}>
          LIVE
        </a>
        <a className="Text CodeButton Button" href={props.codeLink}>
          CODE
        </a>
      </div>
      <img className="Img" src={props.image} alt={props.title} />
      <p className="Text">{props.description}</p>

      <p className="Text">{props.readMe}</p>
    </div>
  );
}

export default Project;
