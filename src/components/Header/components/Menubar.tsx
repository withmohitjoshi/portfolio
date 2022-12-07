import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";

const Menubar = ({
  state,
}: {
  state: {
    showNav: boolean;
    setShowNav: React.Dispatch<React.SetStateAction<boolean>>;
  };
}) => {
  return (
    <menu className="w-fit mx-4 sm:hidden z-10">
      {state.showNav === false ? (
        <GiHamburgerMenu
          className="text-gray-300 hover:text-gray-50 scale-125 hover:scale-150"
          onClick={() => state.setShowNav(true)}
        />
      ) : (
        <RxCross1
          className="text-gray-300 hover:text-gray-50 scale-125 hover:scale-150"
          onClick={() => state.setShowNav(false)}
        />
      )}
    </menu>
  );
};

export default Menubar;
