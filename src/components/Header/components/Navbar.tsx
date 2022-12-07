import { Link as Scroll } from "react-scroll";
type NavbarPropsType = {
  links: {
    id: number;
    name: string;
  }[];
};

const Navbar = (props: NavbarPropsType) => {
  const { links } = props;
  return (
    <nav className="w-fit mx-4 hidden sm:flex">
      <ul className="flex">
        {links.map(({ id, name }) => {
          return (
            <Scroll
              to={name}
              smooth={true}
              duration={500}
              offset={-100}
              key={id}
            >
              <li className="sm:mx-2 lg:mx-4 text-gray-300 sm:text-xs md:text-xl capitalize cursor-pointer hover:text-white duration-200 hover:scale-105">
                {name}
              </li>
            </Scroll>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
