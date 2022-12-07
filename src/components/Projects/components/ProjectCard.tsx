type ProjectCardDataType = {
  name: string;
  liveUrl: string;
  codeUrl: string;
  imageSrc: string;
};
const ProjectCard = ({ projectData }: { projectData: ProjectCardDataType }) => {
  const { name, liveUrl, codeUrl, imageSrc } = projectData;
  return (
    <div className="w-full flex flex-col gap-2 items-center ">
      <div className="w-full text-center text-sky-500 h-[3rem] overflow-y-auto flex items-start lg:items-center lg:text-2xl justify-center">
        <p>{name}</p>
      </div>
      <img
        src={imageSrc}
        alt={name}
        className="w-100 rounded-md sm:hover:scale-105 duration-200 cursor-pointer"
      />
      <div className="w-full flex flex-row items-center justify-evenly text-sky-500 lg:text-xl">
        <a
          href={liveUrl}
          target={"_blank"}
          className="cursor-pointer hover:text-white duration-300"
          rel="noreferrer"
        >
          Live
        </a>
        <div className="bg-gray-700 h-full w-[2px]" />
        <a
          href={codeUrl}
          target={"_blank"}
          className="cursor-pointer hover:text-white duration-300"
          rel="noreferrer"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
