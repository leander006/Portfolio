import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const links = [
    { id: 1, links: "home" },
    { id: 2, links: "skills" },
    { id: 3, links: "about" },
    { id: 4, links: "portfolio" },
    { id: 5, links: "contact" },
  ];
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center w-full z-20 fixed h-16 bg-black text-white">
      <div>
        <h1 className="ml-2 text-4xl font-Blaka">Leander</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ links, id }) => (
          <li
            key={id}
            className="text-gray-500 mx-4 font-medium capitalize cursor-pointer hover:scale-125 duration-300"
          >
            <Link to={links} smooth duration={500}>
              {links}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="flex text-gray-500 md:hidden"
      >
        {!nav ? (
          <i className="cursor-pointer z-20 fa-2xl mr-4 fa-solid fa-bars"></i>
        ) : (
          <i className="cursor-pointer z-20 fa-2xl mr-4 fa-solid fa-xmark"></i>
        )}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-gray-500 bg-gradient-to-b from-black to-gray-800">
          {links.map(({ links, id }) => (
            <li
              key={id}
              className="text-gray-500 py-6 mx-4 font-medium capitalize cursor-pointer hover:scale-125 duration-300"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={links}
                smooth
                duration={500}
              >
                {links}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Navbar;
