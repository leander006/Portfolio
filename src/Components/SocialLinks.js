import React from "react";

function SocialLinks() {
  const socails = [
    {
      id: 1,
      child: (
        <>
          Linkedin <i className="fa-brands fa-2xl fa-linkedin"></i>
        </>
      ),
      href: "https://www.linkedin.com/in/leander06/",
    },
    {
      id: 2,
      child: (
        <>
          Mail <i className="fa-solid fa-2xl fa-envelope"></i>
        </>
      ),
      href: "mailto:leanderdsilva06@gmail.com",
    },
    {
      id: 3,
      child: (
        <>
          Github <i className="fa-brands fa-2xl fa-github"></i>
        </>
      ),
      href: "https://github.com/leander006",
    },
    {
      id: 4,
      child: (
        <>
          Instagram <i className="fa-brands fa-2xl fa-instagram"></i>
        </>
      ),
      href: "https://www.instagram.com/leander_dsilva06/",
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {socails.map(({ id, href, child }) => (
          <li
            key={id}
            className="flex my-0.5 justify-between items-center w-40 h-12 "
          >
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex bg-blue-500 h-full px-4 w-full ml-[-100px] hover:ml-[-10px] justify-between duration-300 rounded-md items-center text-white"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
