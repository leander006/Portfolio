import React, { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const links = [
    { id: 1, links: "home" },
    { id: 2, links: "about" },
    { id: 3, links: "skills" },
    { id: 4, links: "portfolio" },
    { id: 5, links: "contact" },
  ];
  const socails = [
    {
      id: 1,
      child: (
        <>
          <i className="fa-brands fa-2xl fa-linkedin"></i>
        </>
      ),
      href: "https://www.linkedin.com/in/leander06/",
    },
    {
      id: 2,
      child: (
        <>
          <i className="fa-solid fa-2xl fa-envelope"></i>
        </>
      ),
      href: "mailto:leanderdsilva06@gmail.com",
    },
    {
      id: 3,
      child: (
        <>
          <i className="fa-brands fa-2xl fa-github"></i>
        </>
      ),
      href: "https://github.com/leander006",
    },
    {
      id: 4,
      child: (
        <>
          <i className="fa-brands fa-2xl fa-instagram"></i>
        </>
      ),
      href: "https://www.instagram.com/leander_dsilva06/",
    },
  ];
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center bg-white w-full shadow-xl z-50 fixed h-12">
      <div>
        <h1 className="ml-2 text-blue-500 text-4xl font-Blaka">Leander</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ links, id }) => (
          <li
            key={id}
            className="text-black mx-4 font-medium capitalize cursor-pointer hover:scale-125 duration-300"
          >
            <Link to={links} smooth duration={500}>
              {links}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="flex text-black/60 md:hidden"
      >
        {!nav && (
          <i className="cursor-pointer z-20 fa-2xl mr-4 fa-solid fa-bars"></i>
        )}
      </div>
      {nav && (
        <div className="left-0 top-0 fixed z-50 w-full h-screen bg-black/70 ">
          <ul className="flex flex-col p-2 top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] bg-[#ecf0f3] h-screen text-white">
            <div className=" mt-4 w-full items-center">
              <div className="flex justify-between">
                <h1 className="ml-2 text-blue-500 text-4xl font-Blaka">
                  Leander
                </h1>
                <div
                  onClick={() => setNav(!nav)}
                  className="flex cursor-pointer text-black/60 justify-center md:hidden"
                >
                  {nav && (
                    <i className="z-20 fa-2xl mr-4 fa-solid fa-xmark"></i>
                  )}
                </div>
              </div>
              <div className="text-black text-xl border-b my-2 border-gray-400">
                <p>Let's build something new</p>
              </div>
            </div>
            <div className="flex flex-col mt-16 items-center">
              {links.map(({ links, id }) => (
                <li
                  key={id}
                  className="text-black py-6 mx-4 font-medium capitalize cursor-pointer hover:scale-125 duration-300"
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
              <div className="text-black text-center mt-16">
                <h1>Let's connect</h1>
                <div className="flex">
                  {socails.map(({ id, child, href }) => (
                    <li key={id} className="h-12 mx-1">
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="flex bg-blue-500 h-full px-2 rounded-full items-center text-white"
                      >
                        {child}
                      </a>
                    </li>
                  ))}
                </div>
              </div>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
