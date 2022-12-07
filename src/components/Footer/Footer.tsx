import { buildWithIcons } from "../../assets/buildwith";
const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-sky-400 via-purple-600 to-blue-700 pt-1">
      <div className="bg-gray-900 flex flex-col items-center px-6 md:px-12 py-1 md:py-4">
        <div className="text-center mb-3">
          <h1 className="text-gray-200 font-semibold uppercase text-xl sm:text-2xl lg:text-4xl">
            build with
          </h1>
        </div>
        <div className="grid grid-cols-3 w-2/6 md:w-[200px] lg:w-[300px]">
          <img
            src={buildWithIcons.reactjsIcon}
            className="w-full"
            alt="reactjs logo"
          />
          <img
            src={buildWithIcons.typescriptIcon}
            className="w-full"
            alt="typescript logo"
          />
          <img
            src={buildWithIcons.tailwindcssIcon}
            className="w-full"
            alt="tailwindcss logo"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
