import React from "react";
import Project from "./Project";
import calculatorImage from "./calculatorImage.png";
import queerhavenArtImage from "./Queerhavenshop.png";
import dashboardImage from "./dashboardImg.png";
import greenshiftImage from "./greenshift.png";

const projects = [
  {
    title: "Greenshift",
    description:
      "A React.js app that helps users find sustainable alternatives to everyday products.",
    image: greenshiftImage,
    fileLink: "https://greenshiftmap.com",
    codeLink: "https://github.com/citalali/green-shift",
    readMe: "",
  },
  {
    title: "Queerhavenart.com",
    description:
      "A Webshop with a Next.js & Tailwind CSS Frontend and a Node.js && PostgreSQL based backend. Completely self hosted on a Ubuntu Cloud Server",
    image: queerhavenArtImage,
    fileLink: "https://www.queerhavenart.com/",
    codeLink: "https://github.com/citalali/queerhavenart-medusa",
  },
  {
    title: "Dashboard",
    description:
      "My React.js Personal Dashboard website features the weather, a to-do list, and a button that fetches random dog images from an API.",
    image: dashboardImage,
    fileLink: "https://citalali.github.io/rios-dashboard/",
    codeLink: "https://github.com/citalali/rios-dashboard/tree/master",
    readMe: "",
  },
  {
    title: "Calculator",
    description: "Calculator made with vanilla JS, HTML and CSS",
    image: calculatorImage,
    fileLink: "https://citalali.github.io/calculator/",
    codeLink: "https://github.com/citalali/calculator/",
  },
];

function ProjectList() {
  return (
    <div className="ProjectList">
      {projects.map((project) => (
        <Project
          title={project.title}
          description={project.description}
          image={project.image}
          fileLink={project.fileLink}
          codeLink={project.codeLink}
          readMe={project.readMe}
        />
      ))}
    </div>
  );
}

export default ProjectList;
