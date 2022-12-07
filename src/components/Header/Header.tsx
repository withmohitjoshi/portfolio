import React from "react";
import { Link as Scroll } from "react-scroll";
import Menubar from "./components/Menubar";
import Navbar from "./components/Navbar";
const Header = () => {
  const [showNav, setShowNav] = React.useState(false);
  const links = [
    {
      id: 1,
      name: "home",
    },
    {
      id: 2,
      name: "skills",
    },
    {
      id: 3,
      name: "projects",
    },
    {
      id: 4,
      name: "contact",
    },
  ];
  return (
    <>
      <header className="flex bg-gray-900 h-12 sm:h-16 justify-between items-center w-full sticky top-0">
        <Scroll to={"home"} smooth={true} duration={500} offset={-100}>
          <div className="ml-4 z-10">
            <h1 className="text-gray-200 font-medium md:font-semibold text-2xl md:text-4xl uppercase hover:text-white cursor-pointer duration-200">
              Mohit Joshi
            </h1>
          </div>
        </Scroll>
        <Navbar links={links} />
        <Menubar state={{ showNav, setShowNav }} />
        {showNav && (
          <div
            className="flex sm:hidden items-center justify-center w-full h-screen  absolute top-0 left-0 bg-gradient-to-b
          from-gray-900 to-black 
          "
          >
            <ul className="flex flex-col py-4 items-center">
              {links.map(({ id, name }) => {
                return (
                  <Scroll
                    to={name}
                    smooth={true}
                    duration={500}
                    offset={-100}
                    key={id}
                    onClick={() => setShowNav(false)}
                  >
                    <li className="text-gray-300 text-2xl cursor-pointer hover:text-white duration-200 hover:scale-110 uppercase py-2 font-medium">
                      {name}
                    </li>
                  </Scroll>
                );
              })}
            </ul>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
