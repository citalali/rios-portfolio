import React from "react";
import Project from "./Project";
import calculatorImage from "./calculatorImage.png";
import queerhavenArtImage from "./queerhavenArtImage.png";
import dashboardImage from "./dashboardImg.png";
import portfolioImage from "./portfolioImage.png";

const projects = [
  {
    title: "Dashboard",
    description:
      "Personal Dashboard, inculdes the Weather, a to-do List feature, a button which makes an api call to randomDog.api(CHANGE).",
    image: dashboardImage,
    fileLink: "https://citalali.github.io/rios-dashboard/",
    codeLink: "https://github.com/citalali/rios-dashboard/tree/master",
    readMe: "",
  },
  {
    title: "PortfolioWebsite",
    description: "This Website :))",
    image: portfolioImage,
    fileLink: "https://citalali.github.io/rios-portfolio/",
    codeLink: "https://github.com/citalali/rios-portfolio/tree/master",
    readMe: "",
  },
  {
    title: "Queerhavenart.com",
    description: "website I designed and developed for my art business",
    image: queerhavenArtImage,
    fileLink: "www.queerhavenart.com",
    codeLink: "",
    readMe:
      "I used different animation techniques, inculding keyframes for the text and the waves.",
  },
  {
    title: "Calculator",
    description: "Calculator made with vanilla JS, HTML and CSS",
    image: calculatorImage,
    fileLink: "https://citalali.github.io/calculator/",
    codeLink: "https://github.com/citalali/calculator/",
    readMe: "noch nichts",
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
