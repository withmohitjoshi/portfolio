import React, { useState } from "react";
import { Element } from "react-scroll";
import ProjectCard from "./components/ProjectCard";
import ProjectImageModal from "./components/ProjectImageModal";
import { projectsData } from "./projectsData";
import { IoCloseSharp } from "react-icons/io5";
const Projects = () => {
  const [modalInfo, setModalInfo] = useState({ isOpen: false, src: "" });
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
              <ProjectCard
                projectData={projectData}
                setModalInfo={setModalInfo}
              />
            </React.Fragment>
          ))}
        </div>
        <ProjectImageModal modalInfo={modalInfo} setModalInfo={setModalInfo}>
          <>
            <div className="px-4 md:px-0 w-100 md:w-5/6 lg:w-[70%] max-w-8xl">
              <img
                src={modalInfo.src}
                alt="project"
                className="rounded-md aspect-video w-100 shadow-lg shadow-gray-900"
              />
            </div>
            <button
              className="text-white absolute top-5 right-5 lg:right-10"
              onClick={() =>
                setModalInfo((prevState) => ({
                  ...prevState,
                  isOpen: !prevState.isOpen,
                }))
              }
            >
              <IoCloseSharp size={30} />
            </button>
          </>
        </ProjectImageModal>
      </div>
    </Element>
  );
};

export default Projects;
