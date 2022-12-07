import { Element } from "react-scroll";
import SkillCard from "./components/SkillCard";
import { skillsData } from "./skillsData";
const Skills = () => {
  return (
    <Element name="skills" className="w-full bg-white py-6 md:py-12">
      <div className="text-center mb-4">
        <h1 className="text-gray-900 font-semibold uppercase text-xl md:text-3xl lg:text-4xl">
          skills
        </h1>
      </div>
      <div className="mx-6 md:mx-12">
        <div
          className="grid items-center justify-items-center gap-4
            grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6"
        >
          {skillsData.map((skillData) => (
            <SkillCard skillCardData={skillData} key={skillData.id} />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Skills;
