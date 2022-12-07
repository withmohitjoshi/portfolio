import { Element } from "react-scroll";
import MyImage from "./components/MyImage";
import SocialMedia from "./components/SocialMedia";
const Home = () => {
  return (
    <Element
      name="home"
      className="w-full bg-gradient-to-r from-sky-400 via-purple-600 to-blue-700 py-1"
    >
      <div className="bg-gray-900">
        <div className="flex flex-col-reverse sm:flex-row gap-8 sm:gap-6 items-center justify-center mx-6 md:mx-12 py-6 md:py-12 h-full">
          <div className="flex flex-col gap-4 sm:gap-6 w-fit">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl text-white uppercase font-semibold cursor-pointer">
              I'm a front-end developer
            </h1>
            <p className="text-[0.8rem] lg:text-xl lg:leading-5 text-gray-500 md:w-5/6 lg:w-3/4 cursor-pointer">
              Who love to create websites, apps & solve new problems and
              spending 5 to 7 hours of a day with his laptop to write code &
              debug it.
            </p>
            <SocialMedia />
            <a
              className="border-2 border-white w-fit text-white px-4 py-2 sm:px-6 sm:py-3 hover:bg-white hover:text-gray-900 duration-300 font-semibold text-xs self-center sm:self-start"
              href="/Mohit-Resume.pdf"
              download={true}
            >
              Download CV
            </a>
          </div>
          <MyImage />
        </div>
      </div>
    </Element>
  );
};

export default Home;
