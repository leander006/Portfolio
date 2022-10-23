import React from "react";

function Portfolio() {
  const portfolio = [
    {
      id: 1,
      title: "Social-Media-Website",
      href: "https://github.com/leander006/social-media-app",
    },
    {
      id: 2,
      title: "News-Api-website",
      href: "https://github.com/leander006/News-App",
    },
    {
      id: 3,
      title: "Dog-Service-website",
      href: "https://github.com/leander006/Dog-service-website",
    },
    {
      id: 4,
      title: "Quora-website",
      href: "https://github.com/leander006/Forum-discussion",
    },
    {
      id: 5,
      title: "Blog-website",
      href: "https://github.com/leander006/Blog-frontend",
    },
    {
      id: 6,
      title: "Portfolio-website",
      href: "https://github.com/leander006/Portfolio",
    },
  ];
  return (
    <div className="w-full h-full bg-gradient-to-b text-white from-gray-900 to-slate-900">
      <div className="text-4xl font-WorkSans text-center py-6">Portfolio</div>
      <p className="text-2xl my-3 font-WorkSans text-center pb-2">
        This are some of my projects with github repo
      </p>
      <div className="grid rounded-md md:grid-cols-2 gap-8 px-24 py-2 lg:grid-cols-3 items-center justify-center">
        {portfolio.map(({ id, title, href }) => (
          <div key={id} className=" shadow-md shadow-gray-600">
            <h1 className="text-2xl mb-2 text-center">{title}</h1>
            <img
              className="rounded-md duration-300 hover:scale-105 cursor-pointer"
              src="Images/1.jpeg"
              alt="portfolio"
            />
            <h1 className="text-center text-xl mt-2">
              <a href={href} target="_blank">
                Code
              </a>
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
