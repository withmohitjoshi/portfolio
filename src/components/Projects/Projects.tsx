import React from "react";
import { Element } from "react-scroll";
import ProjectCard from "./components/ProjectCard";
import { projectsData } from "./projectsData";
const Projects = () => {
  return (
    <Element
      name="projects"
      className="w-full bg-gradient-to-r from-sky-400 via-purple-600 to-blue-700 py-1"
    >
      <div className=" bg-gray-900 py-6 md:py-12">
        <div className="text-center mb-4">
          <h1 className="text-gray-200 font-semibold uppercase text-xl md:text-3xl lg:text-4xl">
            Projects
          </h1>
        </div>
        <div className="mx-6 md:mx-12 grid gap-x-8 gap-y-6 grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {projectsData.map((projectData) => (
            <React.Fragment key={projectData.id}>
              <ProjectCard projectData={projectData} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Projects;
