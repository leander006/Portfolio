import React from "react";

function Portfolio() {
  const portfolio = [
    {
      id: 1,
      title: "Social-Media-Website",
      src: "Images/social.png",
      href: "https://github.com/leander006/social-media-app",
    },
    {
      id: 2,
      title: "News-Api-website",
      src: "Images/news.png",
      href: "https://github.com/leander006/News-App",
    },
    {
      id: 3,
      title: "Dog-Service-website",
      src: "Images/dog.png",
      href: "https://github.com/leander006/Dog-service-website",
    },
    {
      id: 4,
      title: "Quora-website",
      src: "Images/quora.png",
      href: "https://github.com/leander006/Forum-discussion",
    },
    {
      id: 5,
      title: "Blog-website",
      src: "Images/blog.png",
      href: "https://github.com/leander006/Blog-frontend",
    },
    {
      id: 6,
      title: "Portfolio-website",
      src: "Images/portfolio.png",
      href: "https://github.com/leander006/Portfolio",
    },
  ];
  return (
    <div name="portfolio" className="w-screen pt-12 md:h-screen">
      <div className="text-5xl mx-6 pb-3 lg:mx-24 font-WorkSans font-bold text-blue-500 ">
        PORTFOLIO
      </div>
      <p className="text-xl text-gray-500 mx-6 lg:mx-24 font-WorkSans pb-2">
        This are some of the projects i worked on
      </p>
      <div className="grid rounded-md md:grid-cols-2 gap-8 px-16 md:px-24 py-2 lg:grid-cols-3 items-center justify-center">
        {portfolio.map(({ id, title, href, src }) => (
          <div
            key={id}
            className="relative group rounded-md shadow-xl shadow-gray-400 hover:bg-gradient-to-b from-blue-400 to-blue-600"
          >
            <img
              className="rounded-md group-hover:opacity-10"
              src={src}
              alt="portfolio"
            />
            <div className="hidden group-hover:block absolute top-[35%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <h1 className="text-white text-lg font-bold my-2">{title}</h1>
              <h1 className="text-black text-xl rounded-md bg-white w-fit p-2 ">
                <a href={href} target="_blank" rel="noreferrer">
                  Code
                </a>
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
